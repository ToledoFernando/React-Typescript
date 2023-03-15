import React from "react";
import Card from "./Card";
import { ClimaCity } from "../interface";
import "../scss/Cards.scss";

interface Props {
  element: ClimaCity[];
  delete1: Function;
}

function Cards(props: Props) {
  return (
    <div>
      {!props.element.length ? (
        <div className="Sin_Elementos">
          <h1>Sin elementos</h1>
          <img src="/buscar.png" alt="Buscar Info" />
        </div>
      ) : (
        <div className="cards">
          {props.element.map((e: ClimaCity, index: number) => (
            <Card key={index} info={e} delete1={props.delete1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cards;
