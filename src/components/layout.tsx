import * as React from "react";
import { Helmet } from "react-helmet";
import { tColors } from "../shared";

const Layout = ({children, title}) => {
  return (
    <>
      <Helmet>
        <title>Matt Samuel | {title}</title>
        <meta name="theme-color" content={tColors.white} />
      </Helmet>
      <main className="flex justify-center text-green">
        <div className="w-full max-w-screen-lg">{children}</div>
      </main>
    </>
  );
};

export default Layout;
