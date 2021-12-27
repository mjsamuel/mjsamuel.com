import * as React from "react";
import Home from "../components/home";
import { tColors } from "../shared";

const IndexPage = () => {
  return (
    <>
      <meta name="theme-color" content={tColors.green} />
      <main className="h-screen p-6 md:p-12 ">
        <Home />
      </main>
    </>
  );
};

export default IndexPage;
