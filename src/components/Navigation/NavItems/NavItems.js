import React from "react";
import classes from "./NavItems.css";
import NavItem from "./NavItem/NavItem";

const NavItems = props => {
  return (
    <ul className={classes.NavItems}>
      <NavItem active>Home</NavItem>
      <NavItem>Checkout</NavItem>
    </ul>
  );
};
export default NavItems;
