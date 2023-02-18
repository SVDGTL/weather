import { useRef, useState } from 'react';
import { Form, Search, SearchIcon, SearchLocation } from './style';
import { useData } from '../../../context/context';
import { getGeo, getWeather, getAir } from '../../../services/API';

function SearchInput() {
  // контекст
  const { data, setData } = useData();
  const { search, cityName } = data;
  const ref = useRef();
  const [searchLocation, setSearchLocation] = useState(false);
  // useEffect(() => {
  //   if (geolocation.latitude !== null) {
  //     onLoadWeather();
  //   }
  // }, []);

  const setWeather = async () => {
    const geo = await getGeo(cityName);
    const weather = await getWeather(...geo);
    const air = await getAir(...geo);
    const airQuality = air.main.aqi;
    setData({ ...data, weather, search: '', air: airQuality, error: false });
  };

  const onBlurHandler = () => {
    setData({ ...data, searchLocation: !searchLocation, search: ' ' });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    ref.current.blur();
    ref.current.placeholder = '';
    setWeather();
    setSearchLocation(false);
  };

  const onSearchIconClick = () => {
    ref.current.focus();
    setSearchLocation(true);
    ref.current.placeholder = 'Введите текст и нажмите Enter';
  };

  const onChangeHandler = (evt) => {
    const city = evt.target.value;
    setData({ ...data, search: city, cityName: city });
  };
  console.log(searchLocation);
  return (
    <>
      <SearchLocation state={searchLocation}>{cityName}</SearchLocation>
      <Form onSubmit={onSubmit}>
        <Search
          state={searchLocation}
          onBlur={onBlurHandler}
          value={search}
          onChange={onChangeHandler}
          ref={ref}
        />
        {!searchLocation && <SearchIcon onClick={onSearchIconClick} />}
      </Form>
    </>
  );
}

export default SearchInput;
