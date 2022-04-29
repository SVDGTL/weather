import Card from "../Card";
import { Main, Aside } from "./style";

export { Main, Aside };

function App() {
  return (
    <>
      <Main>
        <Card temp="24°C" day="Fri" />
        <Card temp="24°C" day="Sat" />
      </Main>
      <Aside>ТУТ ПРАВАЯ ЧАСТЬ</Aside>
    </>
  );
}

export default App;
