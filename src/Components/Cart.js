import React from "react";
import { useDispatch } from "react-redux";
import { connect, useSelector } from "react-redux";
import { removeProduct } from "../actions/cart";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div>
      Cart:
      <ul>
        {cart.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <br />
      <button onClick={() => dispatch(removeProduct())}>olish</button>
    </div>
  );
};

export default Cart;
