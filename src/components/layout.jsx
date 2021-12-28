import * as React from "react";
import { Helmet } from "react-helmet";
import { tColors } from "../shared";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>Matt Samuel | {title}</title>
        <meta name="theme-color" content={tColors.white} />
      </Helmet>
      <main className="h-screen p-6 md:p-12 text-green">{children}</main>
    </>
  );
};

export default Layout;
