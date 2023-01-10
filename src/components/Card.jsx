import React from "react";

const Card = ({ img, name, desc }) => {
  return (
    <div className="card">
      <img src={img} alt="image" />
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
