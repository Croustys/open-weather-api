import React from 'react';
import type { IWeatherApiResponse } from '../interfaces/interfaces';
import '../styles/components.css';

const weatherCard = ({
  name,
  coord,
  weather,
  main,
  wind,
  clouds,
  sys,
}: IWeatherApiResponse) => {
  return (
    <div className="box">
      <div className="container">
        <div className="header">{name}</div>
        <div className="coords">
          Coordinates:{' '}
          <span>
            {coord.lat}
            {coord.lon}
          </span>
        </div>
        <div className="desc">{weather.description}</div>
        <div className="temp-min">
          Min Temperature: <span>{main.temp_min}</span>
        </div>
        <div className="temp-max">
          Max Temperature: <span>{main.temp_max}</span>
        </div>
        <div className="temp-feel">
          Temperature Feel: <span>{main.feels_like}</span>
        </div>
        <div className="pressure">
          Pressure: <span>{main.pressure}</span>
        </div>
        <div className="humidity">
          Humidity: <span>{main.humidity}</span>
        </div>

        <div className="wind">
          <h5>Wind</h5>
          <div className="speed">
            Speed: <span>{wind.speed}</span>
          </div>
          <div className="dir">
            Direction: <span>{wind.deg}</span>
          </div>
        </div>
        <div className="clouds">
          Cloud amount: <span>{clouds.all}</span>
        </div>
        <div className="sunrise">
          Sunrise: <span>{sys.sunrise}</span>
        </div>
        <div className="sunset">
          Sunset: <span>{sys.sunset}</span>
        </div>
      </div>
    </div>
  );
};

export default weatherCard;
