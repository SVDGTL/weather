import { useState } from 'react';
import { Search, SearchIcon, SearchLocation } from './style';
import { useData } from '../../../context/context';
import getWeather from '../../../services/API';

function SearchInput() {
  const [inputState, setInputState] = useState(true);
  // контекст
  const { data, setData } = useData();
  const { searchLocation, search, cityName } = data;
  console.log(data);
  // хардкод

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

  const onKeyPressHandler = (evt) => {
    if (evt.key === 'Enter') {
      console.log('test');
      getWeather(cityName);
    }
  };

  return (
    <>
      {/* потом поменять на сёрч */}
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
