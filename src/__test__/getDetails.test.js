import getDetails from '../functions/getDetails';

test('getDetails returns the main details of a city', () => {
  const cities = {
    id: 1850147,
    name: 'Tokyo',
    main: {
      temp: 21.13,
      feels_like: 20.66,
      temp_min: 19.79,
      temp_max: 21.99,
      pressure: 1010,
      humidity: 52,
    },
  };
  expect(getDetails(1850147, cities)).toEqual(cities.main);
});
