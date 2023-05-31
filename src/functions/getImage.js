import cold from '../assets/img/cold.png';
import hot from '../assets/img/hot.png';
import moderate from '../assets/img/moderate.png';
import season from '../assets/img/season.png';

const getImage = (temperature) => {
  if (temperature <= 10) {
    return cold;
  }
  if (temperature > 10 && temperature <= 20) {
    return moderate;
  }
  if (temperature > 20) {
    return hot;
  }
  return season;
};

export default getImage;
