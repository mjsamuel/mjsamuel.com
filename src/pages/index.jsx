import * as React from "react";
import Layout from "../components/layout";
import Visualization from "../components/visualization";
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div className="flex flex-col md:grid gap-8 grid-cols-5 h-screen md:h-80v p-6 md:p-24">
        <div className="h-3/5 md:h-full col-span-3">
          <Visualization name="pts-hover"/>
        </div>

        <div className="flex flex-col justify-end flex-grow col-span-2">
          <h1 className="text-5xl text-right font-bold flex-grow">
            MATTHEW <br /> SAMUEL
          </h1>
          <h2 className="text-xl"> developer based in<br/>melbourne, australia<br/>working on things /</h2>
        </div>
      </div>
      <div className="p-6 md:px-24 md:mt-8">
        <h1 className="text-3xl font-bold mb-5">PROJECTS</h1>
        <Projects />
      </div>
      <div className="p-6 md:px-24 md:mt-8">
        <h1 className="text-3xl font-bold mb-5">CONTACT</h1>
        <Contact />
      </div>
    </Layout>
  );
};

export default IndexPage;
