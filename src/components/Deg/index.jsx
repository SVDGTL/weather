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
  const deg = data.weather.current.temp;
  const measure = data.measure;
  const ctemp = Math.round(deg);
  const gtemp = ctemp * 32;
  const ctempFeel = Math.round(data.weather.current.feels_like);
  const ftempFeel = ctempFeel * 32;
  console.log(deg);
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
