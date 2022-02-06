import * as React from "react";
import { Link } from "gatsby";
import { navLinks } from "../shared";

const NavBar = ({title}) => {
  let filteredLinks = navLinks.filter(link => link.name !== title)
  return (
    <nav className="fixed top-11 left-12">
      {filteredLinks.map((link, i) => {
        return (
          <h2>
            <Link to={link.url} className="hover:italic font-medium text-xl">
              {link.name.toUpperCase()}
            </Link>
          </h2>
        );
      })}
    </nav>
  );
};

export default NavBar;
