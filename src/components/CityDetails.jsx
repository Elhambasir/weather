import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function CityDetails() {
  const cities = useSelector((state) => state.weather);
  const { id } = useParams();
  const detail = cities[0].filter((detail) => detail.id === Number(id));
  return (
    <div className="details-container">
      <h2 className="details-header">{detail ? detail[0].name : 'detail not found'}</h2>
      {detail && (
        <div className="details-box">
          <Link to="/" className="details-back-link">
            Back
          </Link>
          <p className="details-item">
            <span className="details-item-name">Temperature</span>
            <span className="details-item-value">
              {detail[0].main.temp}
              {' '}
              °C
            </span>
          </p>
          <p className="details-item">
            <span className="details-item-name">Humidity</span>
            <span className="details-item-value">
              {detail[0].main.humidity}
              %
            </span>
          </p>
          <p className="details-item">
            <span className="details-item-name">feels_like</span>
            <span className="details-item-value">
              {detail[0].main.feels_like}
              {' '}
              m/s
            </span>
          </p>
          <p className="details-item">
            <span className="details-item-name">Pressure</span>
            <span className="details-item-value">
              {detail[0].main.pressure}
              {' '}
              hPa
            </span>
          </p>
          <p className="details-item">
            <span className="details-item-name">temp_max</span>
            <span className="details-item-value">
              {detail[0].temp_max}
              {' '}
              meters
            </span>
          </p>
          <p className="details-item">
            <span className="details-item-name">temp_min</span>
            <span className="details-item-value">
              {detail[0].main.temp_min}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default CityDetails;
