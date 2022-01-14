import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { tColors, navLinks } from "../shared";

const Layout = ({ children, title, showNav = false }) => {
  let navigation = <></>;
  if (showNav) {
    navigation = (
      <nav>
        {navLinks.map((link, i) => {
          return (
            <h2>
              <Link to={link.url} className="hover:italic">
                {link.name}
              </Link>
            </h2>
          );
        })}
      </nav>
    );
  }

  return (
    <>
      <Helmet>
        <title>Matt Samuel | {title}</title>
        <meta name="theme-color" content={tColors.white} />
      </Helmet>
      <main className="flex justify-center text-green">
        {navigation}
        <div className="w-full max-w-screen-2xl">{children}</div>
      </main>
    </>
  );
};

export default Layout;
