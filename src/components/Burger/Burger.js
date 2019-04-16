import React, { Component } from 'react'
import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient';

class Burger extends Component {

  transformIngredients = () => {
    let ingredientArray = [];
    const { ingredients } = this.props;
    Object.keys(ingredients).forEach(igKey => {
      for (let i = 0; i < ingredients[igKey]; i++) {
        ingredientArray.push(<Ingredient key={igKey+i} type={igKey} />);
      }
    });
    if (!ingredientArray.length) {
      ingredientArray = <p>Please start adding ingredients</p>;
    }
    return ingredientArray;
  }

  render() {
    return (
      <div className={classes.Burger}>
        <Ingredient type="bread-top" />
          {this.transformIngredients()}
        <Ingredient type="bread-bottom" />
      </div>
    );
  }
}

export default Burger;


