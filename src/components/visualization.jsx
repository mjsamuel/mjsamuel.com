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
    let columns = this.space.innerBound[1][0] / 25;
    let rows = this.space.innerBound[1][1] / 25;
    this.pts = Create.gridCells(this.space.innerBound, columns, rows);

    this.data = {
      dimensions: {
        columns: Math.ceil(columns),
        rows: Math.ceil(rows),
      }
    };

    switch (this.state.animation) {
      case "WAVE":
        this.animate = this.animateWave;
        break;
      case "ECHO":
        this.animate = this.animateEcho;
        this.data.center = {
          x: Math.ceil(columns / 2),
          y: Math.ceil(rows / 2),
        }
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

      if (mag >= 120) {
        color = tColors.green;
      } else if (mag >= 110) {
        color = tColors.gray;
      } else {
        color = tColors.white;
      }

      this.form.fill(color).rect(p);
    });
  }

  animateWave(time, ftime) {
    let speed = time * 0.008;
    this.pts.forEach((p, i) => {
      let coords = {
        x: i % this.data.dimensions.columns,
        y: Math.floor(i / this.data.dimensions.columns),
      };
      let leftComponent =
        10 * Math.sin((coords.x - speed) / 12) + this.data.dimensions.rows / 2;

      let color = tColors.green;
      if (leftComponent <= coords.y) {
        color = tColors.white;
      }

      this.form.fill(color).rect(p);
    });
  }

  animateEcho(time, ftime) {
    let maxRadius =
      (this.data.dimensions.columns > this.data.dimensions.rows
        ? this.data.dimensions.columns
        : this.data.dimensions.rows) * 0.75;
    let speed = 0.008;
    let r1 = (time * speed) % maxRadius;
    let r2 = (time * speed + maxRadius / 2) % maxRadius;
    let rightComponent = Math.pow(r1, 2);
    let rightComponent2 = Math.pow(r2, 2);

    this.pts.forEach((p, i) => {
      let coords = {
        x: i % this.data.dimensions.columns,
        y: Math.floor(i / this.data.dimensions.columns),
      };

      let leftComponent =
        Math.pow(coords.x - this.data.center.x, 2) +
        Math.pow(coords.y - this.data.center.y, 2);

      let color = tColors.green;
      if (
        leftComponent <= rightComponent2 * 2 &&
        leftComponent >= rightComponent2
      ) {
        color = tColors.white;
      } else if (
        leftComponent <= rightComponent2 * 4 &&
        leftComponent > rightComponent2 * 2
      ) {
        color = tColors.gray;
      } else if (
        leftComponent <= rightComponent * 2 &&
        leftComponent >= rightComponent
      ) {
        color = tColors.white;
      } else if (
        leftComponent <= rightComponent * 4 &&
        leftComponent > rightComponent * 2
      ) {
        color = tColors.gray;
      }

      this.form.fill(color).rect(p);
    });
  }
}

export default Visualization;
