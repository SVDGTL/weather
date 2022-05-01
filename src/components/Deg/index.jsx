import { Container, Degrees, StyledSpan } from './style'
import { useData } from '../../context/context'

function Deg() {
  const { degrees } = useData()

  return (
    <Container>
      <Degrees>{degrees.deg}</Degrees>
      <StyledSpan>{degrees.measure}</StyledSpan>
    </Container>
  )
}

export default Deg
