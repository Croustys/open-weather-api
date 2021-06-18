import React, { useEffect, useState } from 'react';

import type { IWeatherApiResponse } from './interfaces/interfaces';
type Props = any;
type onKeyPressType = React.KeyboardEvent<HTMLInputElement>;

import { fetchById, fetchByName } from './API';
import { WeatherCard, Error } from './components';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

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
    <div>
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e: onKeyPressType) => handleEnter(e)}
          />
          <Button
            onClick={handleSubmit}
            variant="outline-secondary"
            id="button-addon2"
          >
            Button
          </Button>
        </InputGroup>
      </div>
      {error || weatherData === undefined ? <Error /> : <WeatherCard {...weatherData!} />}
    </div>
  );
};

export default App;
