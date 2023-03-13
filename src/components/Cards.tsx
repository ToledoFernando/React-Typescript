import React from "react";
import Card from "./Card";
import { ClimaCity } from "../interface";

interface Props {
  element: ClimaCity[];
  delete1: Function;
}

function Cards(props: Props) {
  return (
    <div>
      {!props.element.length ? (
        <h1>Sin elementos</h1>
      ) : (
        <div>
          {props.element.map((e: ClimaCity, index: number) => (
            <Card key={index} info={e} delete1={props.delete1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cards;
