interface Coord {
  lat: number;
  lon: number;
}
interface Temp {
  temperatura: number;
  max: number;
  min: number;
}

interface Viento {
  speed: number;
  deg: number;
}
export interface ClimaCity {
  name: string;
  coord: Coord;
  temp: Temp;
  viento: Viento;
  img: string;
  country: string;
}
