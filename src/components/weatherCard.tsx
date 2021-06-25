import React from 'react';
import type { IWeatherApiResponse } from '../interfaces/interfaces';
import '../styles/components.css';

function timeConverter(UNIX_timestamp: number): string {
  const a = new Date(UNIX_timestamp * 1000);
  const hour = a.getHours();
  const min = a.getMinutes();
  const time = formatNumbers(hour) + ':' + formatNumbers(min);
  return time;
}
function formatNumbers(num: number): string {
  return num > 9 ? num.toString() : `0${num}`;
}

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
          Coordinates: <span>{coord.lat}</span> <span>{coord.lon}</span>
        </div>
        <div className="desc">{weather.description}</div>
        <div className="temp-min">
          Min Temperature:{' '}
          <span>
            {main.temp_min} <sup>o</sup>C
          </span>
        </div>
        <div className="temp-max">
          Max Temperature:{' '}
          <span>
            {main.temp_max} <sup>o</sup>C
          </span>
        </div>
        <div className="temp-feel">
          Temperature Feel:{' '}
          <span>
            {main.feels_like} <sup>o</sup>C
          </span>
        </div>
        <div className="pressure">
          Pressure: <span>{main.pressure} hPa</span>
        </div>
        <div className="humidity">
          Humidity: <span>{main.humidity} %</span>
        </div>

        <div className="wind">
          <h5>Wind</h5>
          <div className="speed">
            Speed: <span>{wind.speed} km/h</span>
          </div>
          <div className="dir">
            Direction: <span>{wind.deg}°</span>
          </div>
        </div>
        <div className="clouds">
          Cloud amount: <span>{clouds.all} clouds</span>
        </div>
        <div className="sunrise">
          Sunrise: <span>{timeConverter(sys.sunrise)}</span>
        </div>
        <div className="sunset">
          Sunset: <span>{timeConverter(sys.sunset)}</span>
        </div>
      </div>
    </div>
  );
};

export default weatherCard;
