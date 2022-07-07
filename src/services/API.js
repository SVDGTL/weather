import axios from 'axios';

const APIKey = '09ce57b84777c202831cf3ad6772d860';
const geocodingAPIUrl = 'http://api.openweathermap.org/geo/1.0/direct';
const weatherAPIUrl = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeather(data) {
  const { lon, lat } = data;
  console.log(lon, lat);
  return axios
    .get(weatherAPIUrl, {
      params: {
        lat,
        lon,
        units: 'metric',
        lang: 'ru',
        appid: APIKey,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export async function getGeo(cityName) {
  const city = cityName.replace(/ /g, '');
  return axios
    .get(geocodingAPIUrl, {
      params: {
        q: city,
        limit: 1,
        appid: APIKey,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
