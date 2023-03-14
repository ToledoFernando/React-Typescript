import React from "react";
import { ClimaCity } from "../interface";
import "../scss/Card.scss";

interface Props {
  info: ClimaCity;
  delete1: Function;
}

function Card({ info, delete1 }: Props) {
  const [view, setView] = React.useState<boolean>(false);

  const viewInfo = () => {
    setView(!view);
    // console.log("XD");
  };

  return (
    <div className="card" onClick={viewInfo}>
      {/* {view ? (
        <div className="cardView">
          <button className="Cerrar" onClick={viewInfo}>
            Cerrar
          </button>
          <span className="bg"></span>
          <img src={info.img} alt="" />
          <h1>{info.name}</h1>
          <h2>Country: {info.country}</h2>
          <div className="temp">
            <h5>Temperatura</h5>
            <p>Temp: {info.temp.temperatura}</p>
            <p>Temp_Min: {info.temp.min}</p>
            <p>Temp_Max: {info.temp.max}</p>
          </div>
          <div>
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
          </div>
        </div>
      ) : ( */}
      <div className={view ? "false view" : "false"}>
        <div className="card_body">
          <img src={info.img} alt="" />
          <button className="button" onClick={() => delete1(info)}>
            X
          </button>
          <h1>{info.name}</h1>
          <h2>Country: {info.country}</h2>
          <div className="temp">
            <h5>Temperatura</h5>
            <p>Temp: {info.temp.temperatura}</p>
            <p>Temp_Min: {info.temp.min}</p>
            <p>Temp_Max: {info.temp.max}</p>
          </div>
          <div>
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
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default Card;
