import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = ({ cityWeather, removeCard }) => (
  <div className="city-card">
    <h2>
      <Link to={`/${cityWeather.id}`}>
        {`${cityWeather.name}, ${cityWeather.sys.country}`}
      </Link>
    </h2>
    <div className="city-weather-descr">
      <h3>{cityWeather.weather[0].main}</h3>
      <h5>{cityWeather.weather[0].description}</h5>
    </div>
    <div>
      <p>
        {`Min temperature: ${cityWeather.main.temp_min}`}
      </p>
      <p>
        {`Max temperature: ${cityWeather.main.temp_max}`}
      </p>
      <p>
        {`Location: ${cityWeather.coord.lat}, ${cityWeather.coord.lon}`}
      </p>
    </div>
    <button
      type="button"
      className="city-card-remove"
      onClick={() => removeCard(cityWeather.uniqueId)}
    >
      &otimes;
    </button>
  </div>

);

export default CityCard;
