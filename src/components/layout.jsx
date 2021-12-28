import * as React from "react";
import { tColors } from "../shared";

const Layout = ({ children }) => {
  return (
    <>
      <meta name="theme-color" content={tColors.green} />
      <main className="h-screen p-6 md:p-12 ">{children}</main>
    </>
  );
};

export default Layout;
