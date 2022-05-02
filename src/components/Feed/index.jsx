import { useData } from '../../context/context';
import Card from '../Card';
import Container from './style';

function Feed() {
  const { cards } = useData();
  return (
    <Container>
      {cards.map((el) => (
        <Card temp={el.temp} day={el.day} key={el.index} />
      ))}
    </Container>
  );
}

export default Feed;
