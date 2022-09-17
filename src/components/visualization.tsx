import { PtsCanvasLegacy } from "react-pts-canvas";
import { Create, Group, Pt, UI, UIButton } from "pts/dist/es5";
import { tColors } from "../shared";

const SPEED = 0.01;

class Visualization extends PtsCanvasLegacy<any> {
  private cells: UIButton[] = [];
  private dimensions: { columns: number; rows: number; maxRadius: number } = {
    columns: 0,
    rows: 0,
    maxRadius: 0,
  };
  private circles: { cursor: Circle[]; echos: Circle[] } = {
    echos: [],
    cursor: [],
  };

  public constructor(props: any) {
    super(props);
  }

  start() {
    this.create();
  }

  resize() {
    this.create();
  }

  animate(time: number) {
    this.form?.stroke(tColors.white);

    if (this.space?.pointer) {
      let mousePos = new Pt(
        this.space.pointer.x / 25,
        this.space.pointer.y / 25
      );
      this.circles.cursor.forEach((c) => {
        c.centrePoint = mousePos;
      });
    }

    for (var i = 0; i < this.circles.echos.length; i++) {
      let c = this.circles.echos[i];
      if (c.startTime === undefined) {
        c.init(time);
      } else if (c.radius > this.dimensions.maxRadius) {
        this.circles.echos.splice(i, 1);
      } else {
        c.updateRadius(time);
      }
    }

    this.cells.forEach((cell, index) => {
      let color = tColors.green;
      let coords = this.getCoords(index);
      (Object.keys(this.circles) as (keyof typeof this.circles)[]).forEach(
        (key) => {
          let circles: Circle[] = this.circles[key];
          circles.forEach((c: Circle) => {
            let inRadius =
              Math.pow(coords.x - c.centrePoint.y, 2) +
                Math.pow(coords.y - c.centrePoint.x, 2) <=
              Math.pow(c.radius, 2);
            if (inRadius) {
              color = c.color;
            }
          });
        }
      );
      this.form?.fill(color).rect(cell.group);
    });
    if (this.circles.echos.length > 0) {
      console.log(this.circles.echos[0].radius);
    }
  }

  action(type: String, px: number, py: number) {
    UI.track(this.cells, type, new Pt(px, py));
  }

  private create() {
    if (this.space) {
      let columns = Math.ceil(this.space.innerBound[1][0] / 25);
      let rows = Math.ceil(this.space.innerBound[1][1] / 25);
      this.dimensions = {
        columns,
        rows,
        maxRadius: (columns / rows > 1 ? columns : rows) + 50,
      };
    }

    this.cells = Create.gridCells(
      this.space?.innerBound,
      this.dimensions.columns,
      this.dimensions.rows
    ).map((group: Group, index: number) => {
      let button = UIButton.fromRectangle(group);
      button.onClick(() => {
        let coords = this.getCoords(index);
        this.circles.echos = this.circles.echos.concat(
          Circle.createEcho(coords)
        );
      });
      return button;
    });

    this.circles.cursor = Circle.createCursor();
  }

  private getCoords(index: number): Pt {
    return new Pt(
      Math.floor(index / this.dimensions.columns),
      index % this.dimensions.columns
    );
  }
}

class Circle {
  centrePoint: Pt;
  color: String;
  private baseRadius: number;
  radius: number;
  startTime?: number;
  timeOffset: number;

  constructor(
    centrePoint: Pt,
    radius: number,
    color: String,
    startTime?: number,
    timeOffset: number = 0
  ) {
    this.centrePoint = centrePoint;
    this.baseRadius = radius;
    this.radius = radius;
    this.color = color;
    this.startTime = startTime;
    this.timeOffset = timeOffset;
  }

  init(currentTime: number) {
    this.startTime = currentTime + this.timeOffset;
    this.updateRadius(currentTime);
  }

  updateRadius(currentTime: number) {
    this.radius = this.baseRadius * (currentTime - this.startTime!) * SPEED;
  }

  static createCursor(): Circle[] {
    return [
      new Circle(new Pt(0, 0), 2.75, tColors.gray),
      new Circle(new Pt(0, 0), 2.5, tColors.white),
    ];
  }

  static createEcho(coords: Pt): Circle[] {
    let point = new Pt(coords.y, coords.x);
    return [
      new Circle(point, 4.7, tColors.gray, undefined, 0),
      new Circle(point, 4.25, tColors.white, undefined, 50),
      new Circle(point, 4, tColors.green, undefined, 100),
    ];
  }
}

export default Visualization;
