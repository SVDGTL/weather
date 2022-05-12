import { useState } from 'react';
import { Search, SearchIcon, SearchLocation } from './style';

function SearchInput() {
  // хардкод
  const [value] = useState('Там, где жопа в тепле');
  const [state, setState] = useState(false);
  const [search, setSearch] = useState('');
  const onBlurHandler = () => {
    setState((prev) => !prev);
    setSearch('');
  };

  const onClickHandler = () => {
    setState((prev) => !prev);
  };

  const onChangeHandler = (evt) => {
    setSearch(evt.target.value);
  };

  return (
    <>
      {/* потом поменять на сёрч */}
      <SearchLocation state={state}>{value}</SearchLocation>
      <Search
        state={state}
        onBlur={onBlurHandler}
        value={search}
        onChange={(evt) => onChangeHandler(evt)}
      />
      <SearchIcon onClick={onClickHandler} />
    </>
  );
}

export default SearchInput;
