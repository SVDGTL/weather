import styled from 'styled-components';

const Container = styled.section`
  margin-top: 27px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  filter: drop-shadow(-2px 2.26px 0.75px rgba(0, 0, 0, 0.15));
`;
const NumberD = styled.span`
  font: var(--day-number);
`;
const Day = styled.h3`
  display: inline;
  margin: 0;
  padding: 0;
  font: var(--day);
`;

const Time = styled.h4`
  margin: 0;
  padding: 0;
  font: var(--time);
`;

export { Container, Day, Time, NumberD };
