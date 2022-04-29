import Card from "../Card";
import { Container } from "./style";

const data = [
  { temp: "21°C", day: "Fri" },
  { temp: "21°C", day: "Fri" },
  { temp: "21°C", day: "Fri" },
  { temp: "21°C", day: "Fri" },
];

function Feed() {
  return (
    <Container>
      {data.map((el) => (
        <Card temp={el.temp} day={el.day} />
      ))}
    </Container>
  );
}

export default Feed;
