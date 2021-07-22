import React from "react";
//CSS
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img"
        src={`https://robohash.org/${props.monster.id}?set=set2`}
        alt="monster"
      />
      <h1>{props.monster.name}</h1>
      <p className="paragragh">{props.monster.email}</p>
    </div>
  );
};
