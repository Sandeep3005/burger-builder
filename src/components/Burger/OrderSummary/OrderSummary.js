import React, { Component } from "react";
import classes from "./OrderSummary.css";
import Button from "./../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("Component Will Update");
  }

  ingredientsSummary = () => {
    return Object.keys(this.props.ingredients).map(key => {
      return (
        <li key={key} className={classes.OrderSummary}>
          {key} : {this.props.ingredients[key]}
        </li>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul>{this.ingredientsSummary()}</ul>
        <p>
          Total price: <strong>{this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout ?</p>
        <Button btnType="Danger" clicked={this.props.onCancel} textCase="Upper">
          Cancel
        </Button>
        <Button
          btnType="Success"
          clicked={this.props.onContinue}
          textCase="Upper"
        >
          continue
        </Button>
      </React.Fragment>
    );
  }
}
export default OrderSummary;
