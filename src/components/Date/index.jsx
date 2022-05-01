import { useData } from '../../context/context'
import { Container, Day, Time } from './style'

function Date() {
  const { date } = useData()
  return (
    <Container>
      <Day>{date.day}</Day>
      <Time>{date.time}</Time>
    </Container>
  )
}

export default Date
