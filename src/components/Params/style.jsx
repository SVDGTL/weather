import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 74px;
  margin-top: 38px;

  filter: drop-shadow(-2px 2.26px 0.75px rgba(0, 0, 0, 0.15));
`;
const Box = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 31px;
  &:last-of-type {
    margin: 0;
    &:after {
      visibility: hidden;
    }
  }
  &:after {
    content: '|';
    position: absolute;
    top: 0;
    right: -23px;
  }
`;
const Name = styled.h4`
  margin: 0;
  padding: 0;
  font: var(--params);
`;
const Measure = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  font: var(--params);
`;

const Span = styled.span`
  &:last-of-type {
    visibility: hidden;
  }
`;

const Icon = styled.div`
  width: 22px;
  height: 22px;
  background-image: url(${(props) => props.icon});
`;

const Param = styled.span`
  margin: 0 18px 0 11px;
`;

const Value = styled.p`
  margin: 0;
`;

export { Container, Box, Name, Measure, Span, Param, Icon, Value };
