import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <ul className="nav bg-dark fs-4  p-3 justify-content-end">
      <li className="nav-item">
        <Link className="nav-link text-white" to="sample1">
          Sample1
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white " to="sample2">
          Sample2
        </Link>
      </li>
    </ul>
  );
}

export default Header;
