import { useState, useEffect } from 'react';
import { Container, Day, Time } from './style';

function CurrentDate() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  return (
    <Container>
      <Day>{date.toLocaleDateString('ru-RU', { dateStyle: 'full' })}</Day>
      <Time>
        {date.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Time>
    </Container>
  );
}

export default CurrentDate;
