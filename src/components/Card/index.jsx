import PropTypes from 'prop-types';

import { Container, Text, TextSmall, TextBold } from './style';
import WeatherIcon from '../Icons/WeatherIcon';
import { useData } from '../../context/context';

function Card({ day, icon, weather, feels }) {
  const { data } = useData();
  const weatherF = weather * 32;
  const feelsF = feels * 32;
  const measure = data.measure;
  return (
    <Container>
      <Text>
        {measure === 'C' ? weather : weatherF}
        {measure === 'C' ? '°C' : '℉'}
      </Text>
      <TextSmall>
        как {measure === 'C' ? feels : feelsF}
        {measure === 'C' ? '°C' : '℉'}
      </TextSmall>
      <WeatherIcon size="small" icon={icon} />
      <TextBold>{day}</TextBold>
    </Container>
  );
}

Card.propTypes = {
  day: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  weather: PropTypes.number.isRequired,
  feels: PropTypes.number.isRequired,
};

export default Card;
