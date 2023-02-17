import { useState } from 'react';
import CurrentDate from '../CurrentDate';
import Deg from '../Deg';
// import Feed from '../Feed';
import WeatherIcon from '../Icons/WeatherIcon';
// import Params from '../Params';
import SwitchButton from '../SwitchButton';
import { Container, Header } from './style';
import { useData } from '../../context/context';

function Main() {
  const [isOn, setIsOn] = useState(false);
  const { data, setData } = useData();
  const handle = () => {
    setIsOn((prev) => !prev);
    setData({ ...data, measure: data.measure === 'C' ? 'F' : 'C' });
  };
  return (
    <Container>
      <Header>
        <WeatherIcon />
        <SwitchButton isOn={isOn} handle={handle} />
      </Header>
      <Deg />
      <CurrentDate />
      {/* <Params /> 
      <Feed /> */}
    </Container>
  );
}

export default Main;
