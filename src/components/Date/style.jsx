import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;

  gap: 20px;

  padding-left: 0.625rem;

  filter: drop-shadow(-2px 2.26px 0.75px rgba(0, 0, 0, 0.15));
`;

const Day = styled.h3`
  margin: 0;
  padding: 0;
  font: var(--day);
`;

const Time = styled.h4`
  margin: 0;
  padding: 0;
  font: var(--time);
`;

export { Container, Day, Time };
