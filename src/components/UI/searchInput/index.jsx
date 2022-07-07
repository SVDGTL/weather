import { useState } from 'react';
import { Search, SearchIcon, SearchLocation } from './style';
import { useData } from '../../../context/context';
import { getGeo, getWeather } from '../../../services/API';

function SearchInput() {
  const [inputState, setInputState] = useState(true);
  // контекст
  const { data, setData } = useData();
  const { searchLocation, search, cityName } = data;

  const onBlurHandler = () => {
    setData({ ...data, searchLocation: !searchLocation, search: ' ' });
    setInputState((prev) => !prev);
  };

  const onClickHandler = () => {
    setInputState((prev) => !prev);
    setData({ ...data, searchLocation: !searchLocation });
  };

  const onChangeHandler = (evt) => {
    const city = evt.target.value;
    setData({ ...data, search: city, cityName: city });
  };

  const onKeyPressHandler = async (evt) => {
    if (evt.key === 'Enter') {
      const geo = await getGeo(cityName);
      const weather = await getWeather(...geo);
      setData({ ...data, weather, search: '' });
    }
  };
  console.log(data);
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
