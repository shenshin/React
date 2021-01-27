import React from 'react';

const City = ({
  weatherData: {
    name: cityName,
    coord: { lat, lon },
    main: { temp_min: minTemp, temp_max: maxTemp },
    sys: { country: countryName },
    weather: [{ main: weatherName, description: weatherDescr }],
  },
}) => (
  /* Display each city in its own box */
  <div className="city-card">
    <h2>
      {`${cityName}, ${countryName}`}
    </h2>
    <div className="city-weather-descr">
      <h3>{weatherName}</h3>
      <h5>{weatherDescr}</h5>
    </div>
    <div>
      <p>
        {`Min tepmterature: ${minTemp}`}
      </p>
      <p>
        {`Max temperature: ${maxTemp}`}
      </p>
      <p>
        {`Location: ${lat}, ${lon}`}
      </p>
    </div>
  </div>
);

export default City;
