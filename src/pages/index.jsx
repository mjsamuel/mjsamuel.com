import * as React from "react";
import Projects from "../components/projects";
import Navbar from "../components/navbar";
import ExampleComponent from "../components/square";

// markup
const IndexPage = () => {
  return (
    <main class="m-12 md:m-32">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class='order-2 md:order-1'>
          <ExampleComponent
            background="#E4E2DC"
            name="pts-tester"
          />
        </div>
        <div class="text-right order-1">
          <title>Home Page</title>
          <h1 class="font-bold text-green animate-fade-in-up">
            MATTHEW SAMUEL
          </h1>
          <p class="animate-fade-in-up">Developer. Designer. Dork.</p>
          <p class="animate-fade-in-up">Creating</p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
