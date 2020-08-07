import React from "react";
import PropTypes from "prop-types";

import MyHeader from "./MyHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <MyHeader siteTitle="Agape Cafe" />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
