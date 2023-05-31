import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import right from '../assets/img/right.png';

function CityList({ city, getWeatherImage }) {
  return (

    <div className="mobile-wrapper-city-list-items">
      <div className="mobile-wrapper-city-list-item1">
        <div className="weatherImage">
          <img src={getWeatherImage(city.main.temp)} alt="sdfsdfa" />
        </div>
        <div className="right-arrow">
          <img src={right} alt="Right Arrow" id="right-arrow" />
        </div>
      </div>
      <div className="mobile-wrapper-city-list-item2">
        <h4 className="mobile-wrapper-city-list-item-name-text">{city.name}</h4>
        <p className="mobile-wrapper-city-list-item-name-text">
          {city.main.temp}
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
