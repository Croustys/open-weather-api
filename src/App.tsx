import React, { useEffect, useState } from 'react';

import type { IWeatherApiResponse } from './interfaces/interfaces';
type Props = any;
type onKeyPressType = React.KeyboardEvent<HTMLInputElement>;

import { fetchByName } from './API';
import { WeatherCard, Error } from './components';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './App.css';

const App = ({}: Props) => {
  const [weatherData, setWeatherData] = useState<IWeatherApiResponse>();
  const [input, setInput] = useState<string>();
  const [searchName, setSearchName] = useState<string>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetch() {
      const searchResp = await fetchByName(searchName);
      if (searchResp !== 404) {
        setError(false);
        setWeatherData(searchResp as IWeatherApiResponse);
      } else {
        setError(true);
      }
    }
    fetch();
  }, [searchName]);

  function handleSubmit(): void {
    setSearchName(input);
  }
  function handleEnter(e: onKeyPressType): void {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }
  return (
    <div className="outer-container">
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Desired City's name"
            aria-label="Desired City's name"
            aria-describedby="basic-addon2"
            className="form-inp"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e: onKeyPressType) => handleEnter(e)}
          />
          {/* <Button
            onClick={handleSubmit}
            variant="outline-secondary"
            id="button-addon2"
          >
            Search
          </Button> */}
        </InputGroup>
      </div>
      {error || weatherData === undefined ? (
        <Error />
      ) : (
        <WeatherCard {...weatherData!} />
      )}
    </div>
  );
};

export default App;
