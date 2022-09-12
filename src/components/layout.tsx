import * as React from "react";
import { Helmet } from "react-helmet";
import { tColors } from "../shared";

const Layout = ({children, title}: { children: any, title: string }) => {
  return (
    <>
      <Helmet>
        <title>Matt Samuel | {title}</title>
        <meta name="theme-color" content={tColors.white} />
      </Helmet>
      <main className="flex justify-center text-green">
        <div className="w-full max-w-screen-md">{children}</div>
      </main>
    </>
  );
};

export default Layout;
