// /* eslint-disable */
import { useData } from '../../context/context';
import d01 from '../../images/icons/01d.svg';
import d02 from '../../images/icons/02d.svg';
import d03 from '../../images/icons/03d.svg';
import d04 from '../../images/icons/04d.svg';
import d09 from '../../images/icons/09d.svg';
import d10 from '../../images/icons/10d.svg';
import d11 from '../../images/icons/11d.svg';
import d13 from '../../images/icons/13d.svg';
import d50 from '../../images/icons/50d.svg';

import n01 from '../../images/icons/01n.svg';
import n02 from '../../images/icons/02n.svg';
import n03 from '../../images/icons/03n.svg';
import n04 from '../../images/icons/04n.svg';
import n09 from '../../images/icons/09n.svg';
import n10 from '../../images/icons/10n.svg';
import n11 from '../../images/icons/11n.svg';
import n13 from '../../images/icons/13n.svg';
import n50 from '../../images/icons/50n.svg';

function WeatherIcon() {
  const images = [
    { name: 'd01', url: d01 },
    { name: 'd02', url: d02 },
    { name: 'd03', url: d03 },
    { name: 'd04', url: d04 },
    { name: 'd09', url: d09 },
    { name: 'd10', url: d10 },
    { name: 'd11', url: d11 },
    { name: 'd13', url: d13 },
    { name: 'd50', url: d50 },
    { name: 'n01', url: n01 },
    { name: 'n02', url: n02 },
    { name: 'n03', url: n03 },
    { name: 'n04', url: n04 },
    { name: 'n09', url: n09 },
    { name: 'n10', url: n10 },
    { name: 'n11', url: n11 },
    { name: 'n13', url: n13 },
    { name: 'n50', url: n50 },
  ];
  const { data } = useData();
  let image = {};
  if (!data.error) {
    const iconId = data.weather.current.weather[0].icon;
    const imageName = iconId.slice(2) + iconId.slice(0, 2);
    image = images.find((element) => element.name === imageName);
  } else image.url = d01;
  return <img src={image.url} alt="Иконка погоды" width={150} />;
}

export default WeatherIcon;
