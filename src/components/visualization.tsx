import { PtsCanvas } from "react-pts-canvas";
import { Create, Group, Pt } from "pts/dist/es5";
import { tColors } from "../shared";

class Visualization extends PtsCanvas {
  private pts?: Group[];
  private echos: [{ point: Pt; startTime: number }] = [];
  private dimensions: { columns: number; rows: number } = {
    columns: 0,
    rows: 0,
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
    this.pts?.forEach((p) => {
      this.form.fill(tColors.green).rect(p);
    });

    let mousePos = new Pt(this.space.pointer.x / 25, this.space.pointer.y / 25);
    this.drawCircle(mousePos, 4.5, tColors.gray);
    this.drawCircle(mousePos, 4, tColors.white);
  }

  private create() {
    this.dimensions = {
      columns: Math.ceil(this.space.innerBound[1][0] / 25),
      rows: Math.ceil(this.space.innerBound[1][1] / 25),
    };
    this.pts = Create.gridCells(
      this.space.innerBound,
      this.dimensions.columns,
      this.dimensions.rows
    );
  }

  private drawCircle(position: Pt, radius: number, color: string) {
    this.pts?.forEach((p, i) => {
      let x = Math.floor(i / this.dimensions.columns);
      let y = i % this.dimensions.columns;
      let inRadius =
        Math.pow(x - position.y, 2) + Math.pow(y - position.x, 2) <=
        Math.pow(radius, 2);
      if (inRadius) {
        this.form.fill(color).rect(p);
      }
    });
  }
}

export default Visualization;
