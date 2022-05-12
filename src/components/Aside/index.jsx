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

function Aside() {
  // хардкод
  const airQuality = {
    value: 2,
    valueMax: 5,
    name: 'Air Quality',
    subTitle: 'Moderate',
  };
  const uVIndex = {
    value: 6,
    valueMax: 10,
    name: 'UV Index',
    subTitle: 'High',
  };

  const times = [
    { title: 'Sunrise', hh: '11', mm: '24', ss: '40' },
    { title: 'Golden Hour', hh: '06', mm: '00', ss: '25' },
    { title: 'Sunset', hh: '07', mm: '21', ss: '55' },
  ];

  return (
    <AsideContainer>
      <SearchContainer>
        <SearchInput />
      </SearchContainer>
      <ClockContainer>
        <Clock time={times[0]} />
        <Clock size="max" time={times[1]} />
        <Clock time={times[2]} />
      </ClockContainer>
      <InfoContainer>
        <Info />
      </InfoContainer>
      <ProgressContainer>
        <Progressbar
          deg={(airQuality.value * 100) / airQuality.valueMax}
          name={airQuality.name}
          value={airQuality.value}
          max={airQuality.valueMax}
          subtitle={airQuality.subTitle}
        />
        <Progressbar
          deg={(uVIndex.value * 100) / uVIndex.valueMax}
          name={uVIndex.name}
          value={uVIndex.value}
          max={uVIndex.valueMax}
          subtitle={uVIndex.subTitle}
        />
      </ProgressContainer>
    </AsideContainer>
  );
}

export default Aside;
