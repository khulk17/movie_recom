import React from 'react';
import "./Card.css";
function Card({ image, title, info,Genre }) {
  return (
    <div className="card">
        <div class="container">
        <img src={image} alt={title} />
          </div>
      <h3>{title}</h3>
      <p>{info.length>50?info.substring(0,51)+"....":info}</p>
      <p>{Genre}</p>
    </div>
  );
}

export default Card;
