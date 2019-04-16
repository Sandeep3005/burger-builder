import React from "react";
import classes from "./Control.css";

const Control = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        disabled={props.disabled}
        onClick={() => props.removed(props.type)}
        className={classes.Less}
      >
        Less
      </button>
      <button onClick={() => props.added(props.type)} className={classes.More}>
        More
      </button>
    </div>
  );
};
export default Control;
