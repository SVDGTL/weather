import Date from '../Date';
import Deg from '../Deg';
import Feed from '../Feed';
import WeatherIcon from '../Icons/WeatherIcon';
import Params from '../Params';
// import SwitchButton from '../SwitchButton';
import { Container } from './style';

function Main() {
  return (
    <Container>
      <WeatherIcon />
      {/* <SwitchButton /> */}
      <Deg />
      <Date /> {/* TODO: кривая верстка */}
      <Params /> {/* TODO: кривая верстка */}
      <Feed />
    </Container>
  );
}

export default Main;
