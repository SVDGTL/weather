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
  const { hh, mm, ss, title, hhEng, mmEnd } = time;
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
        <SubTitleNoActive>
          {hhEng}:{mmEnd}
        </SubTitleNoActive>
      </ClockContainer>
    </Container>
  );
}

export default Clock;
