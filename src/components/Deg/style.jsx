import styled from 'styled-components'

const Container = styled.section`
  box-sizing: border-box;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  filter: drop-shadow(-4.51px 2.26px 0.75px rgba(0, 0, 0, 0.15));
`
const Degrees = styled.h2`
  margin: 0;
  padding: 0;

  font: var(--deg);
`

const StyledSpan = styled.span`
  margin: 0;
  padding: 0;

  font: var(--deg-par);
`
export { Container, Degrees, StyledSpan }
