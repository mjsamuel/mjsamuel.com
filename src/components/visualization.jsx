import { PtsCanvas } from "react-pts-canvas";
import { Rectangle, Create, Pt } from "pts/dist/es5";
import { tColors } from "../shared";

class Visualization extends PtsCanvas {
  constructor(props) {
    super(props);
    this.pts = [];
    this.follower = new Pt();
    this.state = {
      printCounter: 0,
      animation: props.animation,
    };
  }

  _create() {
    let columns = this.space.innerBound[1][0] / 20;
    let rows = this.space.innerBound[1][1] / 20;

    this.pts = Create.gridCells(this.space.innerBound, columns, rows);

    switch (this.state.animation) {
      case "SPIRAL":
        break;
      case "ECHO":
        this.animate = this.animateEcho;
        this.dimensions = {
          columns: Math.ceil(columns),
          rows: Math.ceil(rows),
        };
        this.center = {
          x: Math.ceil(columns / 2),
          y: Math.ceil(rows / 2),
        };
        break;
      default:
        this.animate = this.animateFollow;
        this.follower = this.space.center;
        break;
    }
  }

  componentDidUpdate() {
    if (this.props.pause) {
      this.space.pause();
    } else {
      this.space.resume();
    }
  }

  start(space, bound) {
    this._create();
  }

  resize() {
    this._create();
  }

  animateFollow(time, ftime) {
    this.follower = this.follower.add(
      this.space.pointer.$subtract(this.follower)
    );
    this.form.stroke(tColors.white);

    this.pts.forEach((p) => {
      let mag = this.follower.$subtract(Rectangle.center(p)).magnitude();
      let color;

      if (mag >= 95) {
        color = tColors.green;
      } else if (mag >= 80) {
        color = tColors.gray;
      } else {
        color = tColors.white;
      }

      this.form.fill(color).rect(p);
    });
  }

  animateEcho(time, ftime) {
    let maxRadius =
      (this.dimensions.columns > this.dimensions.rows
        ? this.dimensions.columns
        : this.dimensions.rows) / 2;
    let speed = 0.01
    let r1 = time * speed % maxRadius;
    let r2 = ((time * speed) + (maxRadius / 2)) % maxRadius
    let rightComponent = Math.pow(r1, 2);
    let rightComponent2 = Math.pow(r2, 2)

    console.log({
      r1, r2
    })

    this.pts.forEach((p, i) => {
      let coords = {
        x: i % this.dimensions.columns,
        y: Math.floor(i / this.dimensions.columns),
      };

      let leftComponent =
        Math.pow(coords.x - this.center.x, 2) +
        Math.pow(coords.y - this.center.y, 2);

      let color = tColors.green;
      // if (leftComponent <= rightComponent2) {
      //   color = tColors.yellow
      // }

      if (leftComponent <= rightComponent) {
        color = tColors.green;
      } else if (leftComponent <= rightComponent * 2) {
        color = tColors.white;
      } else if (leftComponent <= rightComponent * 4) {
        color = tColors.gray;
      }

      this.form.fill(color).rect(p);
    });
  }
}

export default Visualization;
