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
import images from '../../services/constans';

function Main() {
  const [isOn, setIsOn] = useState(false);
  const { data, setData } = useData();
  let mainIcon = images[0].url;
  const dailyWeather = [];
  if (data.error) {
    console.log('нет гео');
  } else {
    mainIcon = data.weather.current.weather[0].icon;
    const dailyWeatherArray = data.weather.daily;
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
  }

  const handle = () => {
    setIsOn((prev) => !prev);
    setData({ ...data, measure: data.measure === 'C' ? 'F' : 'C' });
  };
  return !data.error ? (
    <Container>
      <Header>
        <WeatherIcon size="big" icon={mainIcon} />
        <SwitchButton isOn={isOn} handle={handle} />
      </Header>
      <Deg />
      <CurrentDate />
      <Params />
      <Cards>
        {!data.error &&
          dailyWeather.map((day) => (
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
  ) : (
    data.error && <Container />
  );
}

export default Main;
