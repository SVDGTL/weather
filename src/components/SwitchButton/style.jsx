import styled from 'styled-components';

const Button = styled.div`
  position: relative;
  width: 92px;
  height: 40px;
  font: var(--time);
  color: #fff;
  text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.16);
  &:before {
    position: absolute;
    content: '${(props) => (props.isOn ? 'F' : 'C')}';
    width: 52px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: ${(props) => (props.isOn ? '0' : '40px')};
    z-index: 100;
    opacity: 1;
  }
  &:after {
    position: absolute;
    content: '${(props) => (props.isOn ? 'C' : 'F')}';
    width: 52px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.18);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: ${(props) => (props.isOn ? '40px' : '0')};
    z-index: 100;
    opacity: 1;
  }
`;
export default Button;
