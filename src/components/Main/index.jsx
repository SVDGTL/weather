import { useState } from 'react';
import CurrentDate from '../CurrentDate';
// import Deg from '../Deg';
// import Feed from '../Feed';
import WeatherIcon from '../Icons/WeatherIcon';
// import Params from '../Params';
import SwitchButton from '../SwitchButton';
import { Container, Header } from './style';

function Main() {
  const [isOn, setIsOn] = useState(false);
  const handle = () => setIsOn((prev) => !prev);
  return (
    <Container>
      <Header>
        <WeatherIcon />
        <SwitchButton isOn={isOn} handle={handle} />
      </Header>
      {/* <Deg /> */}
      <CurrentDate />
      {/* <Params /> 
      <Feed /> */}
    </Container>
  );
}

export default Main;
