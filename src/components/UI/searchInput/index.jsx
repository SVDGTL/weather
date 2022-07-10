import { useState } from 'react';
import { Search, SearchIcon, SearchLocation } from './style';
import { useData } from '../../../context/context';
import { getGeo, getWeather, getAir } from '../../../services/API';

function SearchInput() {
  const [inputState, setInputState] = useState(true);
  // контекст
  const { data, setData } = useData();
  const { searchLocation, search, cityName } = data;
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
    setData({ ...data, weather, search: '', air: airQuality });
  };

  const onBlurHandler = () => {
    setData({ ...data, searchLocation: !searchLocation, search: ' ' });
    setInputState((prev) => !prev);
  };

  const onClickHandler = () => {
    if (search.length > 0) setWeather();
    setInputState((prev) => !prev);
    setData({ ...data, searchLocation: !searchLocation });
  };

  const onChangeHandler = (evt) => {
    const city = evt.target.value;
    setData({ ...data, search: city, cityName: city });
  };

  const onKeyPressHandler = (evt) => {
    if (evt.key === 'Enter') {
      setWeather();
    }
  };
  return (
    <>
      <SearchLocation state={searchLocation}>{cityName}</SearchLocation>
      <Search
        state={searchLocation}
        onBlur={onBlurHandler}
        value={search}
        inputState={inputState}
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
      />
      <SearchIcon onClick={onClickHandler} />
    </>
  );
}

export default SearchInput;
