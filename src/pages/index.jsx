import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Visualization from "../components/visualization";
import { navLinks } from "../shared";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div className="flex flex-col md:grid gap-8 grid-cols-5 h-screen p-6 md:p-12 ">
        <div className="h-1/2 md:h-full col-span-3">
          <Visualization name="pts-hover" background="#0c9" />
        </div>

        <div className="flex flex-col justify-end flex-grow col-span-2">
          <h1 className="text-6xl text-right font-bold flex-grow">
            MATTHEW
            <br />
            SAMUEL
          </h1>
          <div className="font-medium">
            {navLinks.slice(1).map((link, i) => {
              let style = "border-b-2 py-1 text-2xl ".concat(
                i + 1 === navLinks.length ? " border-b-2" : ""
              );
              return (
                <h2 className={style}>
                  <Link to={link.url} className="hover:italic">
                    {link.name.toUpperCase()}
                  </Link>
                </h2>
              );
            })}
            <span className="text-xs">© 2021 Matthew Samuel.</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
