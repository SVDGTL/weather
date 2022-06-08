import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;

  height: 200px;
  width: 110px;

  padding: 16px;
  border-radius: 10px;
  border: 1px solid pink;

  background: rgba(255, 255, 255, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  filter: drop-shadow(-1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1));
`;

const Text = styled.p`
  margin: 0;
  padding: 0;

  font-family: Overpass;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
`;

export { Container, Text };
