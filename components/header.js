import React, { useState } from "react";
import PropTypes from "prop-types";

import Link from "next/link";

const Header = ({ siteTitle }) => {
  const [links, setlinks] = useState([
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
  ]);

  const [isOpen, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  const setActive = (i) => {
    setActiveLink(i + 1);
  };

  return (
    <nav className="navbar navbar-fixed-top navbar-expand-sm bg-dark navbar-dark">
      <Link href="/" className="navbar-brand">
        <img
          style={{ height: "50px", width: "50px" }}
          src="../public/logo.png"
          alt="logo"
        />
        <span style={{ margin: "10px 0px 0px 10px" }}>{siteTitle}</span>
      </Link>
      <button onClick={toggleNavbar} className="navbar-toggler">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={
          isOpen ? "collapse navbar-collapse" : "collapse navbar-collapse show"
        }
      >
        <ul className="navbar-nav mx-auto">
          {links.map((link, i) => (
            <li key={link.id} className="nav-item">
              <Link
                href={link.path}
                onClick={() => setActive(i)}
                className={`nav-link ${link.id === activeLink ? "active" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav-item ml-sm-5">
            <img
              src="../public/cart.png"
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
              alt="cart"
              title="Cart"
              className="cart-icon snipcart-checkout"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
