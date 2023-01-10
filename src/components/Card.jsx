import React from "react";

const Card = ({ img, name}) => {
  return (
    <div className="card">
      <img src={img} alt="image" />
      <div>{name}</div>
    </div>
  );
};

export default Card;
