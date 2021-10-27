import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = ({ yengiMahsulotQoshish }) => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <button
          onClick={() => {
            yengiMahsulotQoshish("nimadir");
          }}
        >
          qoshish
        </button>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    yengiMahsulotQoshish: (maxsulot) => {
      dispatch({
        type: "qoshish",
        payload: maxsulot,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Nav);
