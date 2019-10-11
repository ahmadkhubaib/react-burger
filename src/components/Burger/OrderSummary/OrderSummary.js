import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Order Summary</h3>
      <p>A Delecious burger</p>
      <ul>{ingredientSummary}</ul>
      <p>Proceed to Checkout?</p>
      <Button btnType="Danger">CANCEL</Button>
      <Button btnType="Success">PROCEED</Button>
    </Fragment>
  );
};

export default orderSummary;
