import { Container, Text, Cloud } from "./style";

function Card({ temp, day }) {
  return (
    <Container>
      <Text children={temp} />
      <Cloud />
      <Text children={day} />
    </Container>
  );
}

export default Card;
