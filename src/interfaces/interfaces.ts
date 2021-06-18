export interface IWeatherApiResponse {
  coord: ICoord;
  weather: IWeather;
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
interface ICoord {
  lon: number;
  lat: number;
}
interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
interface IWind {
  speed: number;
  deg: number;
}
interface ISys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface ICityData {
  id: number;
  name: string;
  state?: string;
  country: string;
  coord: ICoord;
}
