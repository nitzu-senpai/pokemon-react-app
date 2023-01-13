import React from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ img, name,id}) => {
  let history = useNavigate()
  // const ShowPokemon=()=>{
  //   history.push()
  // }
  return (
    <div className="card" onClick={()=>{history("/pokemon/"+id)}}>
      <img src={img} alt="image" />
      <div>{name}</div>
    </div>
  );
};

export default Card;
