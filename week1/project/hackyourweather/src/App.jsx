import './App.css';
import weatherData from './city-weather.json';
import Cities from './components/Cities';

function App() {
  return (
    /* List all the cities and their weather information (taken from city-weather.json) */
    <div className="App">
      <h1>Weather</h1>
      <Cities weatherData={weatherData} />
    </div>
  );
}

export default App;
