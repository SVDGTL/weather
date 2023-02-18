import { useState, useEffect } from 'react';
import { Container, Day, Time, NumberD } from './style';

function CurrentDate() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  const dayArray = date
    .toLocaleDateString('ru-RU', { dateStyle: 'full' })
    .split(' ');
  const time = date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const day = dayArray[0].replace(/[^а-яё]/gi, '');
  const dayNumber = dayArray[1];
  const month = dayArray[2];
  const year = dayArray[3].slice(2.3);
  return (
    <Container>
      <div>
        <NumberD>{dayNumber}</NumberD>
        <Day>ое, {month}</Day>
        <NumberD> &apos;{year}</NumberD>
      </div>
      <Time>
        {day} | {time}
      </Time>
    </Container>
  );
}

export default CurrentDate;
