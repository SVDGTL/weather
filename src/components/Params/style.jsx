import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  box-sizing: border-box;
  padding-left: 10px;
  margin-bottom: 74px;
  margin-top: 38px;

  filter: drop-shadow(-2px 2.26px 0.75px rgba(0, 0, 0, 0.15));
`;
const Box = styled.div``;
const Name = styled.h4`
  margin: 0;
  padding: 0;
  font: var(--params);
`;
const Measure = styled.div`
  margin: 0;
  padding: 0;
  font: var(--params);

  display: flex;
  align-items: center;
  gap: 10px;
`;

export { Container, Box, Name, Measure };
