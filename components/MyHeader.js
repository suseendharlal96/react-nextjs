import { useState } from "react";
import PropTypes from "prop-types";

import Link from "next/link";

const MyHeader = ({ siteTitle }) => {
  const [links, setlinks] = useState([
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
  ]);
  const [isOpen, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen(!isOpen);
  };
  return (
    <nav className="navbar navbar-top navbar-expand-sm navbar-dark bg-dark">
      <Link href="/">
        <>
          <img
            style={{ height: "50px", width: "50px" }}
            src="/logo.png"
            alt="logo"
          />
          <span style={{ margin: "10px 0px 0px 10px", color: "#FFF" }}>
            {siteTitle}
          </span>
        </>
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
            <li
              key={link.id}
              style={{ marginRight: "100px" }}
              className="nav-item"
            >
              <Link href={link.path}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
          <li className="nav-item ml-sm-5">
            <img
              src="/cart.png"
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

MyHeader.propTypes = {
  siteTitle: PropTypes.string,
};

MyHeader.defaultProps = {
  siteTitle: ``,
};

export default MyHeader;
