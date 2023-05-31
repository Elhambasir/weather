import getImage from '../functions/getImage';
import cold from '../assets/img/cold.png';
import hot from '../assets/img/hot.png';
import moderate from '../assets/img/moderate.png';

test('getImage returns correct image for temperature', () => {
  expect(getImage(5)).toEqual(cold);
  expect(getImage(15)).toEqual(moderate);
  expect(getImage(25)).toEqual(hot);
  expect(getImage(-5)).toEqual(cold);
});
