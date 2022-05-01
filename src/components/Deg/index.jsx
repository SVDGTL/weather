import { Container, Degrees, StyledSpan } from './style'
import { DEG } from '../../constants/content'

function Deg() {
  return (
    <Container>
      <Degrees>{DEG.deg}</Degrees>
      <StyledSpan>{DEG.measure}</StyledSpan>
    </Container>
  )
}

export default Deg
