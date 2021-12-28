import * as React from "react";
import { Link } from "gatsby";
import { tColors } from "../shared";
import Layout from "../components/layout.jsx";
import Visualization from "../components/visualization";

class AboutPage extends React.Component {
  render() {
    return (
      <Layout title="About">
        <Link to="/">
          <div className="text-2xl font-bold fixed top-12 right-12 hover:italic">
            home
          </div>
        </Link>

        <div className="flex flex-col h-full">
          <div className="h-1/2">
            <h1>Hi, I'm Matt</h1>
          </div>

          <div className="h-1/2 grid gap-8 grid-cols-4 ">
            <div className="bg-green"></div>
            <div className="col-span-2">
              <Visualization background={tColors.white} name="pts-tester" />
            </div>
            <div>
              
              <h3 className="text-xl">github</h3>
              <h3 className="text-xl">instagram</h3>
      <h3 className="text-xl">linkedin</h3>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
