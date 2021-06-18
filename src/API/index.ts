import axios, { AxiosError } from 'axios';
import type { IWeatherApiResponse } from '../interfaces/interfaces';

const API_KEY = `67b2ffb2afe983f9b7379404b943dc87`;
const URL = `https://api.openweathermap.org/data/2.5/weather`;

export async function fetchById(id: number): Promise<IWeatherApiResponse> {
  const res = await axios
    .get(`${URL}?id=${id}&appid=${API_KEY}`)
    .catch((err) => console.error(err));
  const data: IWeatherApiResponse = await res?.data;
  return data;
}
export async function fetchByName(
  name: string = 'Budapest',
): Promise<IWeatherApiResponse | number> {
  const res = await axios
    .get(`${URL}?q=${name}&appid=${API_KEY}`)
    .catch((err: Error | AxiosError) => console.error(err));
  if (res === undefined) return 404;
  const data: IWeatherApiResponse = await res?.data;
  return data;
}
