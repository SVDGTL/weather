import styled from "styled-components";

const Container = styled.section`
  display: flex;
  box-sizing: border-box;
  padding-left: 0.625rem;
  margin-bottom: 4.625rem;
  margin-top: 2.375rem;

  filter: drop-shadow(-2px 2.26px 0.75px rgba(0, 0, 0, 0.15));
`;
const Box = styled.div``;
const Name = styled.h4`
  margin: 0;
  padding: 0;
  font: var(--params);
`;
const Measure = styled.p`
  margin: 0;
  padding: 0;
  font: var(--params);
`;

export { Container, Box, Name, Measure };
