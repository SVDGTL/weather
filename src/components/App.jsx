import styled from "styled-components";
import Card from "./Card";

const Container = styled.main`
  margin: 0 auto;

  padding: 1rem;
  width: 1440px;
  height: 900px;

  background: linear-gradient(248.66deg, #ff9696 0%, #8c6bae 100%);
  color: #ffffff;

  display: flex;
`;

function App() {
  return (
    <Container>
      <Card temp="24°C" day="Fri" />
      <Card temp="24°C" day="Sat" />
      <Card temp="24°C" day="Sun" />
      <Card temp="24°C" day="Mon" />
    </Container>
  );
}

export default App;
