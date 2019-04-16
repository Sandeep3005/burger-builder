import React from "react";
import classes from "./Logo.css";
import logo from "./../../../assets/images/burger_icon.png";

const Logo = props => {
  return (
    <div className={classes.LogoWrapper}>
      <img src={logo} />
    </div>
  );
};
export default Logo;

//
