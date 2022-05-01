import Card from '../Card'
import Container from './style'
import { CARDS } from '../../constants/content'

function Feed() {
  return (
    <Container>
      {CARDS.map((el) => (
        <Card temp={el.temp} day={el.day} />
      ))}
    </Container>
  )
}

export default Feed
