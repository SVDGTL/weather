import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 200px;
  min-width: 110px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 11.3852px;
  background: rgba(255, 255, 255, 0.2);
  filter: blur(0.569258px);
`;

const Text = styled.p`
  margin: 0;
  padding: 0;

  font-family: Inter, sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
`;

const TextSmall = styled(Text)`
  margin: 5px 0 5px 0;
  font-size: 16px;
`;

const TextBold = styled(Text)`
  font-size: 24px;
  font-weight: 800;
`;

export { Container, Text, TextSmall, TextBold };
