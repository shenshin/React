import { v4 as uuid } from 'uuid';
import City from './City';

const Cities = ({ weatherData }) => (
  /*
    Display each city in its own box
    Each box should contain the following pieces of data:

      city name
      country name
      weather main
      weather desciption
      max and min temprature
      location (longitude and lattitude)

  */
  <>
    {weatherData.map((cityData) => {
      const {
        name: cityName,
        coord: { lon: longitude, lat: lattitude },
        main: { temp_min: minTemp, temp_max: maxTemp },
        sys: { country: countryName },
        weather: [details],
      } = cityData;
      const { main: weatherName, description: weatherDescr } = details;
      return (
        <City
          key={uuid()}
          cityName={cityName}
          countryName={countryName}
          weatherName={weatherName}
          weatherDescr={weatherDescr}
          maxTemp={maxTemp}
          minTemp={minTemp}
          longitude={longitude}
          lattidude={lattitude}
        />
      );
    })}
  </>
);

export default Cities;
