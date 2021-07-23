import React from "react";
//CSS
import "./card-list.styles.css";
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
