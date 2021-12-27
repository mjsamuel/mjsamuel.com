import * as React from "react";
import { tColors } from "../shared";
import Visualization from "../components/visualization";

class Home extends React.Component {
  render() {
    return (
      <>
        <title>Home Page</title>
        <div className="flex flex-col md:grid gap-8 grid-cols-2 h-full">
          <div className="h-1/2 md:h-full">
            <Visualization background={tColors.white} name="pts-tester" />
          </div>

          <div className="flex flex-col justify-end text-green flex-grow">
            <h1 className="text-6xl text-right font-bold flex-grow">
              MATTHEW
              <br />
              SAMUEL
            </h1>
            <div className="font-medium">
              <h2 className="border-b-2 border-t-2 text-2xl py-1 "><a className="hover:italic" href="">ABOUT</a></h2>
              <h2 className="border-b-2 text-2xl py-1"><a className="hover:italic" href="">WORK</a></h2>
              <h2 className="border-b-2 text-2xl py-1"><a className="hover:italic" href="">CONTACT</a></h2>
              <span className="text-xs">© 2021 Matthew Samuel.</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
