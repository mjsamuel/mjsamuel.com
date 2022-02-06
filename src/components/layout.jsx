import * as React from "react";
import { Helmet } from "react-helmet";
import { tColors } from "../shared";
import NavBar from "./navigations";

const Layout = ({children, title, showNav = false}) => {
  const navBar = showNav ? <NavBar title={title}></NavBar> : <></>
  return (
    <>
      <Helmet>
        <title>Matt Samuel | {title}</title>
        <meta name="theme-color" content={tColors.white} />
      </Helmet>
      <main className="flex justify-center text-green">
        {navBar}
        <div className="w-full max-w-screen-2xl">{children}</div>
      </main>
    </>
  );
};

export default Layout;
