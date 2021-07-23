import React from "react";
//CSS
import "./card.styles.css";

export const Card = ({item}) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src={`https://robohash.org/${item.id}?set=set2`}
        alt="monster"
      />
      <div className="card-info">
        <h1 className="mb-sm">{item.name}</h1>
        <p className="paragragh">{item.email}</p>
      </div>
    </div>
  );
};
