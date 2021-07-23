import React from "react";

export const Card = ({item}) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src={`https://robohash.org/${item.id}?set=set2`}
        alt="monster"
      />
      <div className="card-info">
        <h2 className="mb-sm">{item.name}</h2>
        <p className="paragragh">{item.email}</p>
      </div>
    </div>
  );
};
