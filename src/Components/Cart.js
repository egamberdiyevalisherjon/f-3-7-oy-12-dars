import React from "react";
import { connect } from "react-redux";

const Cart = ({ nimadir }) => {
  console.log(nimadir);
  return <div>Cart: 0</div>;
};

const mapStateToProps = (state) => {
  return { nimadir: state.cart };
};

export default connect(mapStateToProps)(Cart);
