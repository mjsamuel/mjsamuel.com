import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { tColors } from "../shared";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>Matt Samuel | {title}</title>
        <meta name="theme-color" content={tColors.white} />
      </Helmet>
      <main>
        {/* <Link to="/" class="fixed bottom-0 right-0">home</Link> */}
        <div className="h-screen p-6 md:p-12 text-green flex justify-center">
          <div className="w-full max-w-screen-2xl">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
