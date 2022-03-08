import * as React from "react";
import { Link } from "gatsby";
import { navLinks } from "../shared";

const NavBar = ({title}) => {
  return (
    <nav className="fixed top-11 left-12">
      {Object.keys(navLinks).filter(k => k !== title.toLowerCase()).map(k => {
        return (
          <h2>
            <Link to={navLinks[k]} className="hover:italic font-medium text-xl">
              {k.toUpperCase()}
            </Link>
          </h2>
        );
      })}
    </nav>
  );
};

export default NavBar;
