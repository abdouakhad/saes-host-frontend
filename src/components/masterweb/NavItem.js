import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ name, menuItem, handleThisClick }) => {

    return (
    <li className="p-4 flex justify-center align-middle transition-all duration-100  hover:text-lg" onClick={ (e) => handleThisClick(e) }>
      <Link
        to={`/${menuItem}`}
        className="capitalize font-semibold tracking-wide leading-relaxed"
      >
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
