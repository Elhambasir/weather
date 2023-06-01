import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CityFilter from './CityFilter';
import CityList from './CityList';
import getImage from '../functions/getImage';
import filtered from '../functions/filter';
import { fetchWeatherDataByCityId } from '../redux/cities/weatherSlice';

function Home() {
  const dis = useDispatch();
  const cities = useSelector((state) => state.weather);
  const [filter, setFilter] = useState('');
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    filtered(e.target.value, cities);
  };
  useEffect(() => {
    dis(fetchWeatherDataByCityId());
  }, [dis]);
  return (
    <div className="weather-container">
      <div className="weather-title-container">
        <h6 className="weather-title">Weather</h6>
      </div>
      <div className="mobile-wrapper">
        <div className="mobile-wrapper-top">
          <p className="city-text">CITIES AND THIER WEATHER.</p>
          <div className="mobile-wrapper-filter">
            <CityFilter
              value={filter}
              onchange={handleFilterChange}
            />
          </div>
        </div>
        <div className="mobile-wrapper-city-list">
          {filtered(filter, cities)?.map((city) => (
            <Link to={`/details/${city.id}`} key={city.id} city={city} className="details-link city-box">
              <CityList key={city.id} city={city} getWeatherImage={getImage} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
