import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'

const Data = createContext()

export function useData() {
  return useContext(Data)
}

function DataProvider({ children }) {
  const [data] = useState({
    degrees: {
      deg: 27,
      measure: '°C',
    },
    cards: [
      { temp: '21°C', day: 'Fri' },
      { temp: '22°C', day: 'Sat' },
      { temp: '23°C', day: 'Sun' },
      { temp: '24°C', day: 'Mon' },
    ],
    date: {
      day: '17th Jun ‘21',
      time: 'Thrusday | 2:45 am',
    },
  })

  return <Data.Provider value={data}>{children}</Data.Provider>
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DataProvider
