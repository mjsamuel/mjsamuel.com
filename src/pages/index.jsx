import * as React from "react";
import {tColors} from "../shared";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Visualization from "../components/visualization";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div className="flex flex-col md:grid gap-8 grid-cols-2 h-full">
        <div className="h-1/2 md:h-full">
          <Visualization name="pts" />
        </div>

        <div className="flex flex-col justify-end flex-grow">
          <h1 className="text-6xl text-right font-bold flex-grow">
            MATTHEW
            <br />
            SAMUEL
          </h1>
          <div className="font-medium text-2xl ">
            <h2 className="border-b-2 border-t-2 py-1 ">
              <Link to="/about" className="hover:italic">
                ABOUT
              </Link>
            </h2>
            <h2 className="border-b-2 py-1">
              <Link to="/work" className="hover:italic">
                WORK
              </Link>
            </h2>
            <h2 className="border-b-2 py-1">
              <Link to="/contact" className="hover:italic">
                CONTACT
              </Link>
            </h2>
            <span className="text-xs">© 2021 Matthew Samuel.</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
