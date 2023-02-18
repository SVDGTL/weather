import PropTypes from 'prop-types';
import images from '../../services/constans';
import IconWrapper from './style';

function WeatherIcon({ size, icon }) {
  const iconWidth = size === 'small' ? 74 : 150;
  const image = images.find((element) => element.name === icon);
  return (
    <IconWrapper>
      <img
        src={image ? image.url : images[0].url}
        alt="Иконка погоды"
        width={iconWidth}
      />
    </IconWrapper>
  );
}

WeatherIcon.propTypes = {
  size: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default WeatherIcon;
