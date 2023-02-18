import {
  AsideContainer,
  SearchContainer,
  ProgressContainer,
  ClockContainer,
  InfoContainer,
} from './style';
import Progressbar from '../UI/Progressbar';
import SearchInput from '../UI/searchInput';
import Clock from '../UI/Clock';
import Info from '../Info';
import { useData } from '../../context/context';

function AirQuality({ data }) {
  // качество воздуха
  const airData = data.air;
  let airRevert;
  switch (airData) {
    case 1:
      airRevert = 5;
      break;
    case 2:
      airRevert = 4;
      break;
    case 3:
      airRevert = 3;
      break;
    case 4:
      airRevert = 2;
      break;
    case 5:
      airRevert = 1;
      break;
    default:
      airRevert = 5;
      break;
  }
  let airSubtitle;
  switch (airRevert) {
    case 5:
      airSubtitle = 'Отличное';
      break;
    case 4:
      airSubtitle = 'Хорошее';
      break;
    case 3:
      airSubtitle = 'Среднее';
      break;
    case 2:
      airSubtitle = 'Плохое';
      break;
    case 1:
      airSubtitle = 'Очень плохое';
      break;
    default:
      airSubtitle = 'Нет данных';
      break;
  }
  const airQuality = {
    value: airRevert,
    valueMax: 5,
    name: 'Качество воздуха',
    subTitle: airSubtitle,
  };
  const value = (airQuality.value * 100) / airQuality.valueMax;
  const deg = value > 98 ? 98 : value;
  return (
    <Progressbar
      deg={deg < 4 ? 4 : deg}
      name={airQuality.name}
      value={airQuality.value}
      max={airQuality.valueMax}
      subtitle={airQuality.subTitle}
    />
  );
}

function UVIndex({ weather }) {
  // уф-индекс
  const uvIndex = weather.uvi;
  let uvSubtitle;
  switch (true) {
    case uvIndex <= 2:
      uvSubtitle = 'Низкий';
      break;
    case uvIndex >= 3 && uvIndex <= 5:
      uvSubtitle = 'Средний';
      break;
    case uvIndex >= 6 && uvIndex <= 7:
      uvSubtitle = 'Высокий';
      break;
    case uvIndex >= 8 && uvIndex <= 10:
      uvSubtitle = 'Очень высокий';
      break;
    case uvIndex >= 11 && uvIndex <= 13:
      uvSubtitle = 'Экстремальный';
      break;
    default:
      uvSubtitle = 'Нет данных';
      break;
  }
  const uviData = {
    value: uvIndex,
    valueMax: 13,
    name: 'UV-индекс',
    subTitle: uvSubtitle,
  };
  const value = (uviData.value * 100) / uviData.valueMax;
  const deg = value > 98 ? 98 : value;
  return (
    <Progressbar
      deg={deg < 4 ? 4 : deg}
      name={uviData.name}
      value={uviData.value}
      max={uviData.valueMax}
      subtitle={uviData.subTitle}
    />
  );
}

function Sunrise({ currentDay }) {
  // -----------рассвет-----------
  const sunriseTime = currentDay.sunrise;
  const sunrise = new Date(sunriseTime * 1000);
  const sunriseH = sunrise.getHours();
  const sunriseM = sunrise.getMinutes();
  const sunriseS = sunrise.getSeconds();
  const sunriseMinutes = sunriseM < 10 ? `${sunriseM}0` : sunriseM;
  const sunriseHours = sunriseH < 10 ? `0${sunriseH}` : sunriseH;
  // в этом апи нет времени окончания рассвета, так что будет хардкод
  let sunrisehhEnd = sunriseH;
  let sunrisemmEnd = sunriseM + 15;
  if (sunrisemmEnd >= 60) {
    sunrisehhEnd += 1;
    sunrisemmEnd -= 60;
  }
  const sunriseHoursEnd = sunrisehhEnd < 10 ? `0${sunrisehhEnd}` : sunrisehhEnd;
  const sunriseMinutesEnd =
    sunrisemmEnd < 10 ? `0${sunrisemmEnd}` : sunrisemmEnd;
  const time = {
    title: 'Рассвет',
    hh: sunriseHours,
    mm: sunriseMinutes,
    ss: sunriseS,
    hhEng: sunriseHoursEnd,
    mmEnd: sunriseMinutesEnd,
  };
  return <Clock time={time} />;
}

function Sunset({ currentDay }) {
  // -----------закат-----------
  const sunsetTime = currentDay.sunset;
  const sunset = new Date(sunsetTime * 1000);
  const sunsetH = sunset.getHours();
  const sunsetM = sunset.getMinutes();
  const sunsetS = sunset.getSeconds();
  const sunsetMinutes = sunsetM < 10 ? `0${sunsetM}` : sunsetM;
  const sunsetHours = sunsetH < 10 ? `0${sunsetH}` : sunsetH;
  // в этом апи нет времени окончания заката, так что будет хардкод
  let sunsethhEnd = sunsetH;
  let sunsetmmEnd = sunsetM + 25;
  if (sunsetmmEnd >= 60) {
    sunsethhEnd += 1;
    sunsetmmEnd -= 60;
  }
  const sunsetHoursEnd = sunsethhEnd < 10 ? `0${sunsethhEnd}` : sunsethhEnd;
  const sunsetMinutesEnd = sunsetmmEnd < 10 ? `0${sunsetmmEnd}` : sunsetmmEnd;
  const time = {
    title: 'Закат',
    hh: sunsetHours,
    mm: sunsetMinutes,
    ss: sunsetS,
    hhEng: sunsetHoursEnd,
    mmEnd: sunsetMinutesEnd,
  };
  return <Clock time={time} />;
}

function Moon({ currentDay }) {
  // -----------луна-----------
  const moonriseTime = currentDay.moonrise;
  const moonrise = new Date(moonriseTime * 1000);
  const moonriseH = moonrise.getHours();
  const moonriseM = moonrise.getMinutes();
  const moonriseS = moonrise.getSeconds();
  const moonriseMinutes = moonriseM < 10 ? `0${moonriseM}` : moonriseM;
  const moonriseHours = moonriseH < 10 ? `0${moonriseH}` : moonriseH;
  const moonsetTime = currentDay.moonset;
  const moonset = new Date(moonsetTime * 1000);
  const moonsetH = moonset.getHours();
  const moonsetM = moonset.getMinutes();
  const moonsetMinutes = moonsetM < 10 ? `0${moonsetM}` : moonsetM;
  const moonsetHours = moonsetH < 10 ? `0${moonsetH}` : moonsetH;
  const time = {
    title: ' Луна',
    hh: moonriseHours,
    mm: moonriseMinutes,
    ss: moonriseS,
    hhEng: moonsetHours,
    mmEnd: moonsetMinutes,
  };
  return <Clock size="max" time={time} />;
}

function Aside() {
  const { data } = useData();
  let weather;
  let uvData;
  let currentDay;
  if (!data.error) {
    weather = data.weather.daily;
    uvData = data.weather.current;
    // найти текущий день в массиве ежедневной погоды
    currentDay = weather[0];
  }

  return (
    <AsideContainer>
      <SearchContainer>
        <SearchInput />
      </SearchContainer>
      {!data.error && (
        <>
          <ClockContainer>
            <Sunrise currentDay={currentDay} />
            <Moon currentDay={currentDay} />
            <Sunset currentDay={currentDay} />
          </ClockContainer>
          <InfoContainer>
            <Info />
          </InfoContainer>
          <ProgressContainer>
            <AirQuality data={data} />
            <UVIndex weather={uvData} />
          </ProgressContainer>
        </>
      )}
    </AsideContainer>
  );
}

export default Aside;
