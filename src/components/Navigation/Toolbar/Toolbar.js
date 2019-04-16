import React from "react";
import classes from "./Toolbar.css";
import Logo from "./../Logo/Logo";
import NavItems from "./../NavItems/NavItems";

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.TitleName}>
        <div
          style={{
            width: "200%",
            fontWeight: "bold",
            color: "beige",
            fontSize: "x-large",
            fontFamily: "Pacifico, cursive"
          }}
        >
          Burger Builder
        </div>
        <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};
export default Toolbar;
