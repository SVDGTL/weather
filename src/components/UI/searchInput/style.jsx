import styled from 'styled-components';
import iconSearch from '../../../images/search.svg';
import iconLocation from '../../../images/location.svg';

const SearchLocation = styled.p`
  box-sizing: border-box;
  display: ${(props) => (props.state ? 'none' : 'block')};
  align-items: center;
  padding-left: 62px;
  margin: 0;
  max-width: 446px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--main-color);
  font: var(--search);
  text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
  background: url(${iconLocation}) no-repeat left center;
  background-size: 26px 32px;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  object-fit: cover;
  object-position: center center;
  width: 26px;
  height: 26px;
  background: url(${iconSearch}) no-repeat;
  z-index: 10000;
  cursor: pointer;
`;

const Search = styled.input.attrs((props) => ({
  type: 'search',
  name: 'search',
  minlength: 3,
  value: props.value,
  disabled: props.inputState,
}))`
  position: relative;
  padding: 0 0 0 19px;
  width: 100%;
  max-width: ${(props) => (props.state ? '562px' : '59px')};
  min-height: 59px;
  max-height: 59px;
  background: linear-gradient(
    116.79deg,
    rgba(255, 255, 255, 0.48) -41.94%,
    rgba(255, 255, 255, 0.12) 57.51%
  );
  border: none;
  outline: none;
  border-radius: 20px;
  z-index: 100;

  color: var(--main-color);
  font-style: normal;
  font: var(--search);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: ${(props) => (props.state ? '59px' : '0')};
  ::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  ::-webkit-search-cancel-button {
    display: none;
    width: 0;
    height: 0;
  }
`;

export { Search, SearchIcon, SearchLocation };
