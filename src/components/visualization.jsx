import {PtsCanvas} from 'react-pts-canvas'
import {Rectangle, Create, Pt} from 'pts/dist/es5'
import { tColors } from '../shared';

class Visualization extends PtsCanvas {
    constructor() {
    super();
    this.pts = [];
    this.follower = new Pt();
  }

  _create() {
    this.pts = Create.gridCells(
      this.space.innerBound,
      this.space.innerBound[1][0] / 20,
      this.space.innerBound[1][1] / 20
    );
    this.follower = this.space.center;
  }

  componentDidUpdate() {
    if (this.props.pause) {
      this.space.pause();
    } else {
      this.space.resume();
    }
  }


  // Override PtsCanvas' start function
  start(space, bound) {
    this._create();
  }

  // Override PtsCanvas' resize function
  resize() {
    this._create();
  }

  // Override PtsCanvas' animate function
  animate(time, ftime) {
    this.follower = this.follower.add( this.space.pointer.$subtract( this.follower ) );
    this.form.stroke(tColors.white);

    this.pts.forEach(p => {
      let color;
      let mag = this.follower.$subtract(Rectangle.center(p)).magnitude();
      let r = Rectangle.fromCenter(Rectangle.center(p), Rectangle.size(p));

      if (mag >= 95) {
        color = tColors.green
      } else if ( mag >= 80) {
        color = "#9B9795"
      } else {
        color = tColors.white
      }

      this.form.fill(color).rect(r);
    })
  }
}

export default Visualization
