import { PtsCanvas } from "react-pts-canvas";
import { Create, Group, Pt, UI, UIButton } from "pts/dist/es5";
import { tColors } from "../shared";

class Visualization extends PtsCanvas {
  private cells: UIButton[] = [];
  private circles: Circle[] = [];
  private dimensions: { columns: number; rows: number; aspectRatio: number } = {
    columns: 0,
    rows: 0,
    aspectRatio: 0,
  };

  public constructor(props: any) {
    super(props);
  }

  start(space, bound) {
    this.create();
  }

  resize() {
    this.create();
  }

  animate(time, ftime) {
    let mousePos = new Pt(this.space.pointer.x / 25, this.space.pointer.y / 25);
    // cleanup of the circles array
    for (var i = 0; i < this.circles.length; i++) {
      let c = this.circles[i];
      if (c.startTime === undefined) {
        c.centrePoint = mousePos;
      } else if (c.startTime === -1) {
        c.init(time);
      } else if (c.radius > this.dimensions.columns) {
        this.circles.splice(i, 1);
      } else {
        c.updateRadius(time);
      }
    }

    this.cells.forEach((cell, index) => {
      let color = tColors.green;
      let coords = this.getCoords(index);

      this.circles.forEach((c) => {
        let inRadius: boolean =
          Math.pow(coords.x - c.centrePoint.y, 2) +
            Math.pow(coords.y - c.centrePoint.x, 2) <=
          Math.pow(c.radius, 2);
        if (inRadius) {
          color = c.color;
        }
      });

      this.form.fill(color).rect(cell.group);
    });
  }

  action(type: String, px: number, py: number) {
    UI.track(this.cells, type, new Pt(px, py));
  }

  private create() {
    let columns = Math.ceil(this.space.innerBound[1][0] / 25);
    let rows = Math.ceil(this.space.innerBound[1][1] / 25);
    this.dimensions = {
      columns,
      rows,
      aspectRatio: columns / rows,
    };

    this.cells = Create.gridCells(
      this.space.innerBound,
      this.dimensions.columns,
      this.dimensions.rows
    ).map((group: Group, index: number) => {
      let button = UIButton.fromRectangle(group);
      button.onClick(() => {
        let coords = this.getCoords(index);
        this.circles.splice(
          this.circles.length - 2,
          0,
          ...Circle.createEcho(coords)
        );
      });
      return button;
    });

    this.circles = Circle.createCursor();
  }

  private getCoords(index: number): Pt {
    return new Pt(
      Math.floor(index / this.dimensions.columns),
      index % this.dimensions.columns
    );
  }
}

const SPEED = 0.01;

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
  }

  updateRadius(currentTime: number) {
    this.radius = this.baseRadius * (currentTime - this.startTime!) * SPEED;
  }

  static createCursor(): Circle[] {
    return [
      new Circle(new Pt(0, 0), 4.5, tColors.gray),
      new Circle(new Pt(0, 0), 4, tColors.white),
    ];
  }

  static createEcho(coords: Pt): Circle[] {
    let point = new Pt(coords.y, coords.x);
    return [
      new Circle(point, 4, tColors.gray, -1, 0),
      new Circle(point, 4, tColors.white, -1, 50),
      new Circle(point, 4, tColors.green, -1, 100),
    ];
  }
}

export default Visualization;
