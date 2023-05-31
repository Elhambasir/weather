import filtered from './filterFunction';

test('filtered function returns correct result for empty filter', () => {
  const cities = [
    {
      id: 3421319,
      main: {
        feels_like: -1.18, humidity: 81, pressure: 1014, temp: 5.34, temp_max: 5.34, temp_min: 4.93,
      },
      name: 'Nuuk',
    },
  ];
  expect(filtered('', cities[0])).toEqual(cities[0]);
});

test('filtered function returns correct result for cold filter', () => {
  const cities = [{ name: 'New York', main: { temp: 5 } }, { name: 'Los Angeles', main: { temp: 25 } }];
  expect(filtered('cold', cities)).toEqual([cities[0]]);
});

test('filtered function returns correct result for moderate filter', () => {
  const cities = [{ name: 'New York', main: { temp: 15 } }, { name: 'Los Angeles', main: { temp: 25 } }];
  expect(filtered('moderate', cities)).toEqual([cities[0]]);
});

test('filtered function returns correct result for hot filter', () => {
  const cities = [{ name: 'New York', main: { temp: 5 } }, { name: 'Los Angeles', main: { temp: 25 } }];
  expect(filtered('hot', cities)).toEqual([cities[1]]);
});

test('filtered function returns original array if filter is not recognized', () => {
  const cities = [{ name: 'New York' }, { name: ' Los Angeles' }];
  expect(filtered('unknownFilter', cities)).toEqual(cities);
});
