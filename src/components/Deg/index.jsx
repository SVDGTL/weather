import { Container, Degrees, StyledSpan } from "./style";

import { DEG } from "../../constants/content";
function Deg() {
  return (
    <Container>
      <Degrees children={DEG.deg} />
      <StyledSpan children={DEG.measure} />
    </Container>
  );
}

export default Deg;
