import {
  Container,
  Degrees,
  FlexDiv,
  StyledSpan,
  StyledSpanFeel,
} from './style';
import { useData } from '../../context/context';

function Deg() {
  const { data } = useData();
  const deg = data.deg;
  const measure = data.measure;
  const ctemp = Math.round(deg);
  const gtemp = ctemp * 32;
  const ctempFeel = Math.round(data.degFeel);
  const ftempFeel = Math.round(data.degFeel) * 32;
  return (
    <Container>
      <Degrees>{measure === 'C' ? ctemp : gtemp}</Degrees>
      <FlexDiv>
        <StyledSpan>{measure === 'C' ? '°C' : '℉'}</StyledSpan>
        <StyledSpanFeel>
          чувствуется как {measure === 'C' ? ctempFeel : ftempFeel}
          {measure === 'C' ? '°C' : '℉'}
        </StyledSpanFeel>
      </FlexDiv>
    </Container>
  );
}

export default Deg;
