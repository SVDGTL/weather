import { Container, Degrees, StyledSpan, StyledSpanFeel } from './style';
import { useData } from '../../context/context';

function Deg() {
  const { data } = useData();
  const deg = data.deg;
  const measure = data.measure;
  const ctemp = Math.round(deg);
  const gtemp = ctemp * 32;
  const tempFeel = Math.round(data.degFeel);
  return (
    <>
      <Container>
        <Degrees>{measure === 'C' ? ctemp : gtemp}</Degrees>
        <StyledSpan>{measure === 'C' ? '°C' : '℉'}</StyledSpan>
      </Container>
      <StyledSpanFeel>
        Ощущается как {tempFeel} {measure === 'C' ? '°C' : '℉'}
      </StyledSpanFeel>
    </>
  );
}

export default Deg;
