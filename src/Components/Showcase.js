import React from "react";
import { connect } from "react-redux";

const Showcase = ({ yengiMahsulotQoshish }) => {
  return (
    <div>
      Showcase
      <button
        onClick={() => {
          yengiMahsulotQoshish("nimadir");
        }}
      >
        qoshish
      </button>
    </div>
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

export default connect(null, mapDispatchToProps)(Showcase);
