import axios from 'axios';

const APIKey = 'dd2bdc1e4ca46d8ba241814066d3790f';
const geocodingAPIUrl = 'http://api.openweathermap.org/geo/1.0/direct';
const weatherAPIUrl = 'https://api.openweathermap.org/data/2.5/onecall';

export async function getWeather(data) {
  const { latitude, longitude } = data;
  return axios
    .get(weatherAPIUrl, {
      params: {
        lat: latitude,
        lon: longitude,
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
