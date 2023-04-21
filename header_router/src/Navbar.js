import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link className="co-white" to="/">Home</Link>
        </li>
        <li>
          <Link className="co-white" to="/about">About</Link>
        </li>
        <li>
          <Link className="co-white" to="/blog">Blog</Link>
        </li>
        <li>
          <Link className="co-white" to="/contect">Contect us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;