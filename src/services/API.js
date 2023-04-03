import axios from 'axios';

const APIKey = 'dd2bdc1e4ca46d8ba241814066d3790f';
const geocodingAPIUrl = 'https://api.openweathermap.org/geo/1.0/direct';
const weatherAPIUrl = 'https://api.openweathermap.org/data/2.5/onecall';
const findLocationNameAPIUrl =
  'https://api.openweathermap.org/data/2.5/weather';
const airAPIUrl = 'https://api.openweathermap.org/data/2.5/air_pollution';

export async function getWeather(data) {
  let lat;
  let lon;
  if (data.latitude) {
    lat = data.latitude;
    lon = data.longitude;
  } else {
    lat = data.lat;
    lon = data.lon;
  }
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

export async function getCityName(lat, lon) {
  return axios
    .get(findLocationNameAPIUrl, {
      params: {
        lat,
        lon,
        appid: APIKey,
        lang: 'ru',
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export async function getAir(data) {
  let lat;
  let lon;
  if (data.latitude) {
    lat = data.latitude;
    lon = data.longitude;
  } else {
    lat = data.lat;
    lon = data.lon;
  }
  return axios
    .get(airAPIUrl, {
      params: {
        lat,
        lon,
        appid: APIKey,
      },
    })
    .then((res) => res.data.list[0])
    .catch((err) => console.log(err));
}
