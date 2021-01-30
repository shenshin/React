import { useState } from 'react';
import dotenv from 'dotenv';
import './App.css';
import City from './components/City';
import SearchForm from './components/SearchForm';

dotenv.config();

function App() {
  const [cityName, setCityName] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchCity = async () => {
    try {
      setError(null);
      setLoading(true);
      /*
      Only allow a user to use the "Search City" button when the input
      field has at least 1 character
      */
      if (cityName.length < 1) throw new Error('City name should be at least 1 character long!');
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`);
      if (!response.ok) throw new Error(response.statusText);
      const weatherData = await response.json();
      setSearchList((oldList) => oldList.push(weatherData));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather</h1>
      <SearchForm
        city={cityName}
        setCity={setCityName}
        searchCity={searchCity}
      />
      {searchList.map((cityWeather) => (
        <City key={cityWeather.name} cityWeather={cityWeather} error={error} loading={loading} />
      ))}
    </div>
  );
}

export default App;
