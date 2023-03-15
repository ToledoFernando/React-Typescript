import React, {
  useState,
  useEffect,
  ChangeEventHandler,
  FormEventHandler,
} from "react";
import { apiKey, apiURL, setApi } from "../config.json";
import Cards from "./components/Cards";
import { ClimaCity } from "./interface";
import l from "/l.webp";
import p from "/p.webp";
import s from "/s.webp";
import "./scss/App.scss";
import Footer from "./components/footer";

function App() {
  const [nameCity, setNameCity] = useState<string>("");
  const [err, setErr] = useState<boolean>(true);
  const [load, setLoad] = useState<boolean>(false);
  const [errmsg, setErrmsg] = useState<string>("");
  const [advErr, setAdvErr] = useState<boolean>(false);
  const [climas, setClimas] = useState<Array<ClimaCity>>([]);

  const deleteData = (info: ClimaCity) => {
    let dt: string = localStorage.getItem("data") ?? "";
    let datos: ClimaCity[] = JSON.parse(dt) || [];
    datos = datos.filter((e: ClimaCity) => e.name !== info.name);
    localStorage.setItem("data", JSON.stringify(datos));
    setClimas(datos);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNameCity(e.target.value);
    if (e.target.value.length > 0) {
      return setErr(false);
    } else {
      return setErr(true);
    }
  };

  const newData = (datos: ClimaCity) => {
    const dt: string | null = localStorage.getItem("data");
    if (!dt) {
      setClimas([...climas, datos]);
      return localStorage.setItem("data", JSON.stringify([datos]));
    } else {
      let result = JSON.parse(dt);

      result = result.filter((e: ClimaCity) => e.name !== datos.name);
      result.push(datos);
      setClimas(result);
      localStorage.setItem("data", JSON.stringify(result));
    }
  };

  const buscar: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const response = await fetch(`${apiURL}${nameCity}${setApi}${apiKey}`, {
        method: "GET",
      });
      console.log(response);
      if (!response.ok)
        throw Error(`${response.status} ${response.statusText}`);
      const json = await response.json();
      let imagen: string = "";
      let temp = Math.round((json.main.temp - 273.15) * 10) / 10;
      if (temp <= 15) imagen = l;
      if (temp <= 25) imagen = p;
      if (temp > 25) imagen = s;

      const result: ClimaCity = {
        name: json.name,
        coord: json.coord,
        img: imagen,
        temp: {
          temperatura: Math.round((json.main.temp - 273.15) * 10) / 10,
          max: Math.round((json.main.temp_max - 273.15) * 10) / 10,
          min: Math.round((json.main.temp_min - 273.15) * 10) / 10,
        },
        viento: json.wind,
        country: json.sys.country,
      };
      setLoad(false);
      setNameCity("");
      newData(result);
    } catch (error: Error | any) {
      setAdvErr(true);
      setLoad(false);
      setErrmsg(error.message);
      setTimeout(() => {
        setAdvErr(false);
      }, 2500);
    }
  };

  useEffect(() => {
    const element = localStorage.getItem("data");
    if (element != null) return setClimas(JSON.parse(element));
  }, []);

  return (
    <div className="body">
      <div>
        <span className={advErr ? "error" : "error errn"}>
          <label>{errmsg}</label>
        </span>
        <form className="form" onSubmit={buscar}>
          {load ? (
            <>
              {" "}
              <span className="load">
                <img src="/load.svg" alt="" />
              </span>
            </>
          ) : null}
          <div>
            <input
              autoComplete="off"
              id="input"
              type="text"
              onChange={handleChange}
              value={nameCity}
            />
            <label className={nameCity.length ? "label" : ""} htmlFor="input">
              Nombre de la ciudad
            </label>
          </div>
          <button disabled={err}>Buscar</button>
        </form>
        <hr className="hr" />
        <Cards element={climas} delete1={deleteData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
