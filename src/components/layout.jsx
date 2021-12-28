import * as React from "react";
import { Helmet } from "react-helmet";
import { tColors } from "../shared";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>Matt Samuel | {title}</title>
        <meta name="theme-color" content={tColors.green} />
      </Helmet>
      <main className="h-screen p-6 md:p-12 ">{children}</main>
    </>
  );
};

export default Layout;
