import { Container, Text } from "./style";
import CardIcon from "../Icons/CardIcon";

function Card({ temp, day }) {
  return (
    <Container>
      <Text children={temp} />
      <CardIcon />
      <Text children={day} />
    </Container>
  );
}

export default Card;
