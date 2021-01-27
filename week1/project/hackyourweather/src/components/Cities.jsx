import City from './City';

const Cities = ({ cities }) => (
  <>
    {cities.map((weatherData) => (
      <City key={weatherData.name} weatherData={weatherData} />
    ))}
  </>
);

export default Cities;
