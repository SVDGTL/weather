import axios from 'axios';
// import { useData } from '../context/context';

const APIKey = '09ce57b84777c202831cf3ad6772d860';
const geocodingAPIUrl = 'http://api.openweathermap.org/geo/1.0';
// const weatherAPIUrl = 'https://api.openweathermap.org/data/2.5';

export default function getWeather(cityName) {
  return (
    axios
      .get(geocodingAPIUrl, {
        params: {
          q: cityName,
          limit: 1,
          appid: APIKey,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
  );
}
