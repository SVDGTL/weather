import Button from './style';

function SwitchButton({ isOn, handle }) {
  return <Button isOn={isOn} onClick={handle} />;
}

export default SwitchButton;
