import React from 'react'
import classes from './Ingredient.css';

const Ingredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case "tomato":
      ingredient = <div className={classes.Tomato} />;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese} />;
      break;
    case "salad":
      ingredient = <div className={classes.Salad} />;
      break;
    case "potato":
      ingredient = <div className={classes.Potato} />;
      break;
    default:
      ingredient = null;
  }

  return ingredient;;
}
export default Ingredient;