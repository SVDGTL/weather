import { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useData } from '../../context/context';
// import Main from '../Main';
import Aside from '../Aside';
import { getWeather } from '../../services/API';
import Loading from './style';

const Geolocation = () => {
  const { data, setData } = useData();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((loc) => {
      const { latitude } = loc.coords;
      const { longitude } = loc.coords;
      const geolocation = loc.coords;
      let weather;

      const onLoadWeather = async () => {
        weather = await getWeather(geolocation);
        setData({
          ...data,
          geolocation: { latitude, longitude },
          weather,
          noGeo: false,
        });
      };
      onLoadWeather();
    });
  }, []);
};

function App() {
  const { data } = useData();
  console.log(data);
  const loading = data.noGeo;
  return (
    <>
      {loading && (
        <Loading>
          <ReactLoading type="spokes" color="#fff" height={333} width={188} />
        </Loading>
      )}
      <Geolocation />
      {/* <Main /> */}
      <Aside />
    </>
  );
}

export default App;
