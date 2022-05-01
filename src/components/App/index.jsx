import Date from '../Date'
import Deg from '../Deg'
import Feed from '../Feed'
import WeatherIcon from '../Icons/WeatherIcon'
import Params from '../Params'
import { Main, Aside } from './style'

function App() {
  return (
    <>
      <Main>
        <WeatherIcon />
        <Deg />
        <Date /> {/* TODO: кривая верстка */}
        <Params /> {/* TODO: кривая верстка */}
        <Feed />
      </Main>
      <Aside />
    </>
  )
}

export default App
