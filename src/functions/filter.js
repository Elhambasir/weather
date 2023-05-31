const filtered = (filter, cities) => {
  if (filter === '') return cities[0];
  if (filter === 'cold') return cities[0].filter((city) => city.main.temp <= 10);
  if (filter === 'moderate') return cities[0].filter((city) => city.main.temp > 10 && city.main.temp <= 20);
  if (filter === 'hot') return cities[0].filter((city) => city.main.temp > 20);
  return cities[0];
};

export default filtered;
