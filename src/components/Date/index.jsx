import { Container, Day, Time } from './style'
import { DATE } from '../../constants/content'

function Date() {
  return (
    <Container>
      <Day>{DATE.day}</Day>
      <Time>{DATE.time}</Time>
    </Container>
  )
}

export default Date
