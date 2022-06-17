import { Container, Measure } from './style';

function Item({ el }) {
  return <p>{`${el.name} ${el.value} ${el.measure} |`}</p>;
}

function Params() {
  const data = [
    {
      name: 'Wind',
      value: '10',
      measure: 'km/h',
    },
    {
      name: 'Hum',
      value: '54',
      measure: '%',
    },
    {
      name: 'Rain',
      value: '0.2',
      measure: '%',
    },
  ];
  return (
    <Container>
      <Measure>
        {data.map((el) => (
          <Item el={el} />
        ))}
      </Measure>
    </Container>
  );
}

export default Params;
