import { Container, Measure, Param, Icon, Value, Box } from './style';
import { useData } from '../../context/context';
import presIcon from '../../images/icons/pres.svg';
import windIcon from '../../images/icons/wind.svg';
import humIcon from '../../images/icons/hum.svg';

function Item({ item }) {
  return (
    <Box>
      <Icon icon={item.icon} />
      <Param>{item.name}</Param>
      <Value>
        {item.value} {item.measure}
      </Value>
    </Box>
  );
}

function Params() {
  const { data } = useData();
  const wind = data.weather.current.wind_speed;
  const humidity = data.weather.current.humidity;
  const pressure = Math.round(data.weather.current.pressure / 1.333);
  const params = [
    {
      name: 'Ветер',
      value: wind,
      measure: 'м/с',
      icon: windIcon,
    },
    {
      name: 'Влажность',
      value: humidity,
      measure: '%',
      icon: humIcon,
    },
    {
      name: 'Давление',
      value: pressure,
      measure: 'мм.р.т',
      icon: presIcon,
    },
  ];
  return (
    <Container>
      <Measure>
        {params.map((item) => (
          <Item item={item} key={item.name} />
        ))}
      </Measure>
    </Container>
  );
}

export default Params;
