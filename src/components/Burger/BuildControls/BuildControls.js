import React from "react";
import Control from "./Control/Control";
import classes from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Tomato", type: "tomato" },
  { label: "Cheese", type: "cheese" },
  { label: "Potato", type: "potato" }
];
const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: {props.totalPrice.toFixed(2)}</p>
      {controls.map(ctrl => (
        <Control
          added={props.ingredientsAdded}
          removed={props.ingredientsRemoved}
          key={ctrl.label}
          type={ctrl.type}
          disabled={props.disabled[ctrl.type]}
          label={ctrl.label}
        />
      ))}
      <button
        onClick={props.orderNowClick}
        disabled={!props.purchaseable}
        className={classes.OrderButton}
      >
        ORDER NOW
      </button>
    </div>
  );
};
export default buildControls;
