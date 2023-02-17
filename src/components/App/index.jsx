import { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useData } from '../../context/context';
import Main from '../Main';
import Aside from '../Aside';
import { getWeather, getCityName, getAir } from '../../services/API';
import Loading from './style';

const Geolocation = () => {
  const { data, setData } = useData();

  useEffect(() => {
    let weather;
    navigator.geolocation.getCurrentPosition(
      (loc) => {
        const lat = loc.coords.latitude;
        const lon = loc.coords.longitude;
        const geolocation = loc.coords;
        const onLoadWeather = async () => {
          weather = await getWeather(geolocation);
          const city = await getCityName(lat, lon);
          const air = await getAir(geolocation);
          console.log(weather);
          setData({
            ...data,
            deg: weather.current.temp,
            degFeel: weather.current.feels_like,
            geolocation: { lat, lon },
            weather,
            noGeo: false,
            cityName: city.name,
            air: air.main.aqi,
          });
        };
        onLoadWeather();
      },
      (error) => {
        console.log(error);
        setData({
          ...data,
          error: true,
          noGeo: false,
          cityName: 'Город не определен',
        });
      }
    );
  }, []);
};

function App() {
  const { data } = useData();
  const loading = data.noGeo;
  return (
    <>
      {loading && (
        <Loading>
          <ReactLoading type="spokes" color="#fff" height={333} width={188} />
        </Loading>
      )}
      <Geolocation />
      {!loading && <Main />}
      {!loading && <Aside />}
    </>
  );
}

export default App;
