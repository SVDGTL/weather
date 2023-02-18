import { useState } from 'react';
import CurrentDate from '../CurrentDate';
import Deg from '../Deg';
// import Feed from '../Feed';
import WeatherIcon from '../Icons/WeatherIcon';
// import Params from '../Params';
import SwitchButton from '../SwitchButton';
import { Cards, Container, Header } from './style';
import { useData } from '../../context/context';
import Params from '../Params';
import Card from '../Card';

function Main() {
  const [isOn, setIsOn] = useState(false);
  const { data, setData } = useData();
  const mainIcon = data.weather.current.weather[0].icon;
  const dailyWeatherArray = data.weather.daily;
  const dailyWeather = [];
  dailyWeatherArray.forEach((daily) => {
    dailyWeather.push({
      day: new Date(daily.dt * 1000)
        .toLocaleDateString('ru-RU', {
          dateStyle: 'full',
        })
        .split(' ')[0]
        .replace(/[^а-яё]/gi, ''),
      icon: daily.weather[0].icon,
      weather: Math.round(daily.temp.day),
      feels: Math.round(daily.feels_like.day),
    });
  });
  // убрать текущий день
  dailyWeather.shift();
  /* eslint no-param-reassign: "error" */
  dailyWeather.forEach((item) => {
    switch (item.day) {
      case 'понедельник':
        item.shortDay = 'Пн';
        break;
      case 'вторник':
        item.shortDay = 'Вт';
        break;
      case 'среда':
        item.shortDay = 'Ср';
        break;
      case 'четверг':
        item.shortDay = 'Чт';
        break;
      case 'пятница':
        item.shortDay = 'Пт';
        break;
      case 'суббота':
        item.shortDay = 'Сб';
        break;
      case 'воскресенье':
        item.shortDay = 'Вс';
        break;
      default:
        item.shortDay = 'хз';
        break;
    }
  });
  const handle = () => {
    setIsOn((prev) => !prev);
    setData({ ...data, measure: data.measure === 'C' ? 'F' : 'C' });
  };
  return (
    <Container>
      <Header>
        <WeatherIcon size="big" icon={mainIcon} />
        <SwitchButton isOn={isOn} handle={handle} />
      </Header>
      <Deg />
      <CurrentDate />
      <Params />
      <Cards>
        {dailyWeather.map((day) => (
          <Card
            feels={day.feels}
            icon={day.icon}
            weather={day.weather}
            day={day.shortDay}
            key={`${day.feels}-${day.weather}-${day.shortDay}`}
          />
        ))}
      </Cards>
    </Container>
  );
}

export default Main;
