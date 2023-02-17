import { Container, Degrees, StyledSpan } from './style';
import { useData } from '../../context/context';

function Deg() {
  const { data } = useData();
  const deg = data.deg;
  const measure = data.measure;
  const ctemp = Math.round(deg);
  const gtemp = ctemp * 32;
  return (
    <Container>
      <Degrees>{measure === 'C' ? ctemp : gtemp}</Degrees>
      <StyledSpan>{measure === 'C' ? '°C' : '℉'}</StyledSpan>
    </Container>
  );
}

export default Deg;
