import { Container, HalfCircle, Slider, Title } from './style';

function Progressbar({ deg }) {
  return (
    <Container>
      <HalfCircle deg={deg}>
        <Slider deg={deg} />
        <Title>2/5</Title>
        <Title>Bla-bla-bla</Title>
      </HalfCircle>
    </Container>
  );
}

export default Progressbar;
