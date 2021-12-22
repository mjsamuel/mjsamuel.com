import * as React from "react";
import Projects from "../components/projects";
import Navbar from "../components/navbar";
import ExampleComponent from "../components/square";

// markup
const IndexPage = () => {
  return (
    <main className="h-screen p-12">
      <title>Home Page</title>
      <div className="md:grid gap-8 grid-cols-2 h-full">

        <div className="order-2 md:order-1 h-1/5 md:h-full">
          <ExampleComponent
            background="#E4E2DC"
            name="pts-tester"
          />
        </div>

        <div className="order-1 md:order-2 flex flex-col justify-end text-green">
          <h1 className="text-6xl text-right font-bold flex-grow animate-fade-in-up ">
            MATTHEW<br/>SAMUEL
          </h1>
          <div className="mb-2 font-medium">
            <h2 className="border-b-2 border-t-2 text-xl py-1">ABOUT</h2>
            <h2 className="border-b-2 text-xl py-1">WORK</h2>
            <h2 className="border-b-2 text-xl py-1">CONTACT ME</h2>
          </div>
        </div>

      </div>
    </main>
  );
};

export default IndexPage;
