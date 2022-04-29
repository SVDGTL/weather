import { Container, Day, Time } from "./style";
import { DATE } from "../../constants/content";

function Date() {
  return (
    <Container>
      <Day children={DATE.day} />
      <Time children={DATE.time} />
    </Container>
  );
}

export default Date;
