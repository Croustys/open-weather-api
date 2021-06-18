import React from 'react';
import type { IWeatherApiResponse } from '../interfaces/interfaces';
import '../styles/components.css';

const weatherCard = (props: IWeatherApiResponse) => {
  if (!props) return null;
  return (
    <div className="box">
      <div className="container">
        <div className="header">{props.name}</div>
        <div className="coords">
          Latitude: {props.coord.lat} Longtitude: <span>{props.coord.lon}</span>
        </div>
        <div className="desc">{props.weather.description}</div>
        <div className="temp-min">Min Temperature: <span>{props.main.temp_min}</span></div>
        <div className="temp-max">Max Temperature: <span>{props.main.temp_max}</span></div>
        <div className="temp-feel">Temperature Feel: <span>{props.main.feels_like}</span></div>
        <div className="pressure">Pressure: <span>{props.main.pressure}</span></div>
        <div className="humidity">Humidity: <span>{props.main.humidity}</span></div>

        <div className="wind">
          <h5>Wind</h5>
          <div className="speed">Speed: <span>{props.wind.speed}</span></div>
          <div className="dir">Direction: <span>{props.wind.deg}</span></div>
        </div>
        <div className="clouds">Cloud amount: <span>{props.clouds.all}</span></div>
        <div className="sunrise">Sunrise: <span>{props.sys.sunrise}</span></div>
        <div className="sunset">Sunset: <span>{props.sys.sunset}</span></div>
      </div>
    </div>
  );
};

export default weatherCard;
