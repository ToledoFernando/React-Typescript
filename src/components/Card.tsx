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
  };

  return (
    <div className="card" onClick={viewInfo}>
      <div className={view ? "false view" : "false"}>
        <div className="card_body">
          <img src={info.img} alt="" />
          <div className="back"></div>
          <button className="button" onClick={() => delete1(info)}>
            X
          </button>
          <div className={view ? "front" : "front_n"}>
            <div>
              <h1>{info.name}</h1>
              <h2>Country: {info.country}</h2>
            </div>
            <div className={view ? "temp" : "temp_n"}>
              <h5>Temperatura</h5>
              <p>Temp: {info.temp.temperatura}</p>
              {view ? (
                <>
                  <p>Temp_Min: {info.temp.min}</p>
                  <p>Temp_Max: {info.temp.max}</p>
                </>
              ) : null}
            </div>
            {view ? (
              <>
                <div className="infoEx">
                  <div className="coord">
                    <h3>Coord</h3>
                    <p>Lat: {info.coord.lat}</p>
                    <p>Lon: {info.coord.lon}</p>
                  </div>
                  <div className="wind">
                    <h4>Viento</h4>
                    <p>Deg: {info.viento.deg}</p>
                    <p>Speed: {info.viento.speed} m/s</p>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
