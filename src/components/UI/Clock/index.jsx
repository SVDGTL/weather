import {
  Container,
  Title,
  ClockContainer,
  ClockHands,
  ClockHandHour,
  ClockHandMinutes,
  ClockHandSeconds,
  SubTitle,
  SubTitleNoActive,
} from './style';

function Clock({ size, time }) {
  const deg = 6;
  // хардкод
  const { hh, mm, ss, title } = time;
  // для вставки
  const minutes = +mm * deg;
  const hours = +hh * 30 + minutes / 12;
  const seconds = +ss * deg;
  return (
    <Container size={size}>
      <Title>{title}</Title>
      <ClockContainer size={size}>
        <ClockHands>
          <ClockHandHour hours={hours} minutes={minutes} />
          <ClockHandMinutes minutes={minutes} />
          <ClockHandSeconds seconds={seconds} />
        </ClockHands>
        <SubTitle>
          {hh}:{mm}
        </SubTitle>
        <SubTitleNoActive>11:40</SubTitleNoActive>
      </ClockContainer>
    </Container>
  );
}

export default Clock;
