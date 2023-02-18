import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% { transform: rotate(-45deg)}
    50% { transform: rotate(135deg)}
`;

const rotate2 = keyframes`
    0% { transform: rotate(0deg)}
    50% { transform: rotate(-135deg)}
`;

const Container = styled.div`
  min-height: 163px;
  min-width: 184px;
`;

const HalfCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Slider = styled.div`
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 6px;
  width: 98px;
  background-color: transparent;
  z-index: 100;
  transform-origin: bottom left;
  transform: scale(-1) rotate(calc(1deg * (${(prop) => prop.deg} * 1.8)));
  //transition: transform 1s ease-out;
  animation: ${rotate2} 1s ease-in;

  ::after {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    background: #fdfdfd;
    border: 1px solid #efeded;
    box-sizing: border-box;
    z-index: 10000;
    border-radius: 50%;
  }
`;

const SubTitle = styled.span`
  font-family: Inter, sans-serif;
  display: block;
  margin: 0;
  max-width: 135px;
  overflow: hidden;
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  line-height: 120%;
  text-align: center;
  color: #fff;
  text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Title = styled.span`
  margin: 0 0 33px 0;
  padding: 0;
  font-family: Inter, sans-serif;
  display: block;
  font-style: normal;
  font-weight: 300;
  font-weight: 300;
  font-size: 28px;
  line-height: 120%;
  text-align: center;
  color: #fff;
  text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
`;

const HalfCircle = styled.div`
  margin: 8px 8px 0 8px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 92px;
  width: 184px;

  ::after {
    position: absolute;
    box-sizing: border-box;
    content: '';
    top: 0;
    left: 0;
    width: 184px;
    height: 184px;
    border: 6px solid;
    border-radius: 50%;
    border-color: #713ffd #713ffd rgba(172, 142, 255, 0.78)
      rgba(172, 142, 255, 0.78);
    transform: rotate(calc(1deg * (-45 + (${(prop) => prop.deg} * 1.8))));
    transition: transform 1s ease-out;
    animation: ${rotate} 1s ease-in;
  }
`;

export { HalfCircleContainer, Container, HalfCircle, Slider, SubTitle, Title };
