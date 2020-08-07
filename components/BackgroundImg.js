import React from "react";

const BackgroundImg = ({ img, styleClass, title, children }) => {
  return (
    <div>
      <img className={styleClass} style={{ width: "100%" }} src={img} />
      <div className="centered">
        <h1 style={{ color: "darkorange", fontWeight: "bold" }}>{title}</h1>
      </div>
    </div>
  );
};

BackgroundImg.defaultProps = {
  title: "Welcome to Agape Café",
  styleClass: "default-background",
};

export default BackgroundImg;
