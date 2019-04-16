import React from "react";
import classes from "./Button.css";

const Button = props => {
  return (
    <button
      className={[
        classes.Button,
        classes[props.btnType],
        classes[props.textCase]
      ].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};
export default Button;
