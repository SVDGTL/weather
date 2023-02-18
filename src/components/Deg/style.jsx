import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  box-sizing: border-box;
  filter: drop-shadow(-2px 2.26px 0.75px rgba(0, 0, 0, 0.15));
`;
const Degrees = styled.h2`
  margin: 0;
  padding: 0;
  font: var(--deg);
  filter: drop-shadow(-4.51px 2.26px 0.75px rgba(0, 0, 0, 0.15));
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledSpan = styled.span`
  font: var(--deg-par);
`;
const StyledSpanFeel = styled.span`
  align-self: flex-end;
  font: var(--time);
`;
export { Container, Degrees, StyledSpan, StyledSpanFeel, FlexDiv };
