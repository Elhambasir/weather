const filtered = (filter, cities) => {
  if (filter === '') return cities;
  if (filter === 'cold') return cities.filter((city) => city.main.temp <= 10);
  if (filter === 'moderate') return cities.filter((city) => city.main.temp > 10 && city.main.temp <= 20);
  if (filter === 'hot') return cities.filter((city) => city.main.temp > 20);
  return cities;
};

export default filtered;
