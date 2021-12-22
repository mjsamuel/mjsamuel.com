import * as React from "react";
import Projects from "../components/projects";
import Navbar from "../components/navbar";
import ExampleComponent from "../components/square";

// markup
const IndexPage = () => {
  return (
    <main className="h-screen p-12">
      <title>Home Page</title>
      <div className="md:grid grid-cols-1 md:grid-cols-2 h-full">

        {/*  */}
        <div className="order-2 md:order-1 h-1/5 md:h-full">
          <ExampleComponent
            background="#E4E2DC"
            name="pts-tester"
          />
        </div>

        {/*  */}
        <div className="text-right order-1 md:order-2 h-auto">
          <h1 className="font-bold text-green animate-fade-in-up text-xl">
            MATTHEW SAMUEL
          </h1>
        </div>

      </div>
    </main>
  );
};

export default IndexPage;
