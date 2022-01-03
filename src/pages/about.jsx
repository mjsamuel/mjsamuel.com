import * as React from "react";
import { Link } from "gatsby";
import { tColors } from "../shared";
import Layout from "../components/layout.jsx";
import Visualization from "../components/visualization";

const links = [
  {
    name: "RESUME",
    url: "/resume.pdf",
  },
  {
    name: "GITHUB",
    url: "https://github.com/mjsamuel",
  },
  {
    name: "INSTAGRAM",
    url: "https://www.instagram.com/matt.samuel/",
  },
  {
    name: "LINKEDIN",
    url: "https://au.linkedin.com/in/matt-samuel",
  },
];

class AboutPage extends React.Component {
  render() {
    return (
      <Layout title="About">
        <div className="flex flex-col h-full">
          <div className="h-2/5">
            <h1 className="text-6xl font-bold">ABOUT</h1>
            <Link to="/">home</Link>
          </div>

          <div className="h-3/5 grid gap-8 grid-cols-4 ">
            <div className="bg-green"></div>
            <div className="col-span-2">
              <Visualization background="#0cf" animation="ECHO" name="pts"/>
            </div>
            <div>
              {links.map((link, i) => {
                let style = "text-3xl font-medium".concat(
                  i + 1 !== links.length ? " pb-4" : ""
                );
                return (
                  <h3 className={style}>
                    <a href={link.url}>{link.name}</a>
                  </h3>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
