import React from "react";
//component
import { Card } from "./card";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key= {monster.id} item={monster} />
      ))}
    </div>
  );
};
