import React from "react";

import BackgroundImage from "gatsby-background-image";

const BackgroundImg = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white  text-uppercase  text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  );
};

BackgroundImg.defaultProps = {
  title: "Welcome to Agape Café",
  styleClass: "default-background",
};

export default BackgroundImg;
