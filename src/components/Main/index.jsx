import Date from '../Date';
import Deg from '../Deg';
import Feed from '../Feed';
import WeatherIcon from '../Icons/WeatherIcon';
import Params from '../Params';
import SwitchButton from '../SwitchButton';
import { Container } from './style';

function Main() {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <WeatherIcon />
        <SwitchButton />
      </div>
      <Deg />
      <Date />
      <Params /> {/* TODO: кривая верстка */}
      <Feed />
    </Container>
  );
}

export default Main;
