import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  min-height: ${(props) => (props.size === 'max' ? '315px' : '272px')};
  max-width: 165px;
`;

const Title = styled.span`
  display: block;
  font: var(--clock-aq-uvi);
  color: var(--main-color);
`;

const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 100px;
  min-height: ${(props) => (props.size === 'max' ? '245px' : '210px')};
  max-width: ${(props) => (props.size === 'max' ? '130px' : '105px')};
  width: 100%;
`;

const ClockHands = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 13px 0 0 0;
  height: 97.55px;

  ::after {
    content: '';
    position: absolute;
    /* top: 50%;
    left: 50%; */
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: var(--main-color);
    z-index: 100000;
  }
`;

const ClockHandHour = styled.div`
  position: absolute;
  top: calc(50% - 23px);
  width: 4px;
  background-color: var(--no-active-color);
  height: 23px;
  border-radius: 40px;
  transform: rotateZ(${(props) => props.hours}deg);
  transform-origin: center bottom;
  z-index: 1000;
`;

const ClockHandMinutes = styled.div`
  position: absolute;
  top: calc(50% - 37.53px);
  transform: rotateZ(${(props) => props.minutes}deg);
  transform-origin: center bottom;
  border-radius: 40px;
  height: 37.53px;
  width: 4px;
  background-color: #828282;
`;
const ClockHandSeconds = styled.div`
  position: absolute;
  top: calc(50% - 53px);
  border-radius: 40px;
  height: 53px;
  width: 2px;
  background-color: #885ffc;
  transform: rotateZ(${(props) => props.seconds}deg);
  transform-origin: center bottom;
`;

const SubTitle = styled.p`
  font-style: normal;
  text-align: center;
  color: var(--main-color);
  font: var(--clock-aq-uvi);
  margin: 4px 0 0 0;
`;

const SubTitleNoActive = styled(SubTitle)`
  color: var(--no-active-color);
  font: var(--clock-aq-uvi-small);
  margin: 8px 0 0 0;
`;

export {
  Container,
  Title,
  ClockContainer,
  ClockHands,
  ClockHandHour,
  ClockHandMinutes,
  ClockHandSeconds,
  SubTitle,
  SubTitleNoActive,
};
