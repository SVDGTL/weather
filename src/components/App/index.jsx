import { useEffect } from 'react';
import { useData, DataProvider } from '../../context/context';
// import Main from '../Main';
import Aside from '../Aside';
import { getWeather } from '../../services/API';

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
      };
      setData({ ...data, geolocation: { latitude, longitude }, weather });
      onLoadWeather();
    });
  }, []);
};

function App() {
  return (
    <DataProvider>
      <Geolocation />
      {/* <Main /> */}
      <Aside />
    </DataProvider>
  );
}

export default App;
