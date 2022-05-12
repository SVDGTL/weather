import {
  HalfCircleContainer,
  Container,
  Slider,
  SubTitle,
  HalfCircle,
  Title,
} from './style';

function Progressbar({ deg, name, value, max, subtitle }) {
  return (
    <Container>
      <Title>{name}</Title>
      <HalfCircleContainer>
        <HalfCircle deg={deg}>
          <Slider deg={deg} />
          <SubTitle>{`${value}/${max}`}</SubTitle>
          <SubTitle>{subtitle}</SubTitle>
        </HalfCircle>
      </HalfCircleContainer>
    </Container>
  );
}

export default Progressbar;
