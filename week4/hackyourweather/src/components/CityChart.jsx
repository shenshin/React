/*
  On the city page there will be a chart (made with recharts)
  that displays the correct data for 5-day forecast
*/
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const CityChart = () => {
  const { cityId } = useParams();
  const history = useHistory();
  return (
    <div>
      Здесь будет диаграмма города
      {cityId}
      {/*
        Add a "Back" button to go back to /, on the city page
      */}
      <button
        type="button"
        onClick={() => history.goBack()}
      >
        Back
      </button>
    </div>
  );
};

export default CityChart;
