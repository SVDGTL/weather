import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  overflow: hidden;
`
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
  z-index: 1000;
  transform-origin: bottom left;
  transform: scale(-1) rotate(calc(1deg * (${(prop) => prop.deg} * 1.8)));
  transition: transform 1s ease-out;

  ::after {
    content: '';
    height: 16px;
    width: 16px;
    background: #fdfdfd;
    border: 1px solid #efeded;
    box-sizing: border-box;
    z-index: 1000000;
    border-radius: 50%;
  }
`

const Title = styled.span`
  display: block;
  margin: 0;
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  line-height: 120%;
  text-align: center;
  color: #fff;
  text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
`
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
    transform: rotate(calc(1deg * (-45 + (${(prop) => prop.deg} * 1.8)));
    transition: transform 1s ease-out;

  }
`

export { Container, HalfCircle, Slider, Title }
