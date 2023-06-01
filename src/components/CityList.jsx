import React from 'react';
import PropTypes from 'prop-types';
import right from '../assets/img/right.png';

function CityList({ city, getWeatherImage }) {
  return (

    <div className="mobile-wrapper-city-list-items">
      <div className="mobile-wrapper-city-list-item1">
        <div className="weatherImage">
          {city && city.main && <img src={getWeatherImage(city.main.temp)} alt="sdfsdfa" />}
        </div>
        <div className="right-arrow">
          <img src={right} alt="Right Arrow" id="right-arrow" />
        </div>
      </div>
      <div className="mobile-wrapper-city-list-item2">
        {city && city.main && <p className="mobile-wrapper-city-list-item-name-text">{city.name}</p>}
        <p className="mobile-wrapper-city-list-item-name-text">
          {city && city.main && city.main.temp}
          °C
        </p>
      </div>
    </div>
  );
}

CityList.propTypes = {
  city: PropTypes.string.isRequired,
  getWeatherImage: PropTypes.string.isRequired,
};
export default CityList;
