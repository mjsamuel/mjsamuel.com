import * as React from "react";
import Layout from "../components/layout";
import Section from "../components/section";

import Visualization from "../components/visualization";

import { projects, contactLinks } from "../data"

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div className="flex flex-col md:grid gap-6 grid-cols-5 h-screen md:h-60v p-6 md:px-24 md:py-16">
        <div className="h-3/5 md:h-full col-span-3">
          <Visualization name="pts-hover" />
        </div>

        <div className="flex flex-col justify-end flex-grow col-span-2">
          <h1 className="text-3xl text-right font-bold flex-grow">
            MATTHEW
            <br />
            SAMUEL
          </h1>
          <h2>developer based in melbourne, australia working on things /</h2>
        </div>
      </div>
      <Section title="PROJECTS" items={projects} />
      <Section title="CONTACT" items={contactLinks} />
    </Layout>
  );
};

export default IndexPage;
