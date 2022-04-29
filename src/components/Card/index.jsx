import { Container, Text, DemoIcon } from "./style";

function Card({ temp, day }) {
  return (
    <Container>
      <Text children={temp} />
      <DemoIcon />
      <Text children={day} />
    </Container>
  );
}

export default Card;
