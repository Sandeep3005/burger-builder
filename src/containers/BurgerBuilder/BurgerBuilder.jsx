import React, { Component } from "react";
import Burger from "./../../components/Burger/Burger.js";
import BuildControl from "./../../components/Burger/BuildControls/BuildControls";
import Modal from "./../../components/UI/Modal/Modal.js";
import OrderSummary from "./../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE = {
  salad: 10,
  cheese: 20.5,
  tomato: 10.75,
  potato: 5
};
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        tomato: 0,
        potato: 0
      },
      totalPrice: 40,
      purchaseable: false,
      orderNowClicked: false
    };
  }

  isPurchaseable = () => {
    // let { salad, cheese, tomato, potato } = this.state.ingredients;
    //  return salad + cheese + tomato + potato > 0 ? true : false;

    const { ingredients } = this.state;
    let sum = 0;
    Object.keys(ingredients).forEach(key => (sum = sum + ingredients[key]));
    return sum > 0 ? true : false;
  };

  addIngredientHandler = type => {
    let { ingredients, totalPrice } = this.state;
    ingredients[type] = ++ingredients[type];
    let newPrice = INGREDIENTS_PRICE[type] + totalPrice;
    this.setState({
      ingredients,
      totalPrice: newPrice,
      purchaseable: true
    });
  };

  removeIngredientHandler = type => {
    let { ingredients, totalPrice } = this.state;
    let ingCount = ingredients[type];

    if (ingCount <= 0) return;

    ingredients[type] = --ingCount;
    let newPrice = totalPrice - INGREDIENTS_PRICE[type];
    this.setState({
      ingredients,
      totalPrice: newPrice,
      purchaseable: this.isPurchaseable()
    });
  };

  orderNowClickHandler = () => {
    this.setState({
      orderNowClicked: true
    });
  };

  hideOrderNowModal = () => {
    console.log("herex");
    this.setState({
      orderNowClicked: false
    });
  };

  purchaseContinueHandler = () => {};

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Modal show={this.state.orderNowClicked} hide={this.hideOrderNowModal}>
          <OrderSummary
            totalPrice={this.state.totalPrice}
            onContinue={this.purchaseContinueHandler}
            onCancel={this.hideOrderNowModal}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControl
          totalPrice={this.state.totalPrice}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          orderNowClick={this.orderNowClickHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
