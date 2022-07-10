import PropTypes from 'prop-types';
// import axios from 'axios';
import { createContext, useContext, useState, useMemo } from 'react';

const Data = createContext();

export function useData() {
  return useContext(Data);
}

export function DataProvider({ children }) {
  const [data, setData] = useState({
    // degrees: {
    //   deg: 27,
    //   measure: '°C',
    // },
    // cards: [
    //   { temp: '21°C', day: 'Fri' },
    //   { temp: '22°C', day: 'Sat' },
    //   { temp: '23°C', day: 'Sun' },
    //   { temp: '24°C', day: 'Mon' },
    // ],
    // date: {
    //   day: '17th Jun ‘21',
    //   time: 'Thrusday | 2:45 am',
    // },
    noGeo: true,
    geolocation: {
      latitude: null,
      longitude: null,
    },
    weather: {},
    inputValue: '',
    searchLocation: false,
    search: '',
    cityName: '',
  });
  const memoData = useMemo(() => ({ data, setData }), [data]);
  return <Data.Provider value={memoData}>{children}</Data.Provider>;
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
