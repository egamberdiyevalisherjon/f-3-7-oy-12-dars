import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, id }) => {
  return (
    <Link to={"/charector/" + id}>
      <div className="card">
        <img src={image} height="400" className="card-image-top" alt="djksdk" />
      </div>
    </Link>
  );
};

export default Card;
