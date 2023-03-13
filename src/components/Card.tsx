import React from "react";
import { ClimaCity } from "../interface";

interface Props {
  info: ClimaCity;
  delete1: Function;
}

function Card({ info, delete1 }: Props) {
  return (
    <div>
      <button onClick={() => delete1(info)}>Eliminar</button>
      <h1>{info.name}</h1>
      <h2>Country: {info.country}</h2>
      <div className="coord">
        <h3>Coord</h3>
        <p>Lat: {info.coord.lat}</p>
        <p>Lon: {info.coord.lon}</p>
      </div>
      <div className="wind">
        <h4>Viento</h4>
        <p>Deg: {info.viento.deg}</p>
        <p>Speed: {info.viento.speed}</p>
      </div>
      <div className="temp">
        <h5>Temperatura</h5>
        <p>Temp: {info.temp.temperatura}</p>
        <p>Temp_Min: {info.temp.min}</p>
        <p>Temp_Max: {info.temp.max}</p>
      </div>
    </div>
  );
}

export default Card;
