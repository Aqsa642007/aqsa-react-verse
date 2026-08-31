import { useState, useEffect } from "react";

function Weather() {
  const [city, setCity] = useState("Lahore");
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "YOUR_API_KEY";

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);

    try {
      const response = await fetch(
        https//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
      );

      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setWeather(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const handleSearch = () => {
    if (search.trim()) {
      setCity(search);
      setSearch("");
    }
  };

  return (
    <section className="weather-page">
      <div className="weather-container">
        <p className="page-label">LIVE WEATHER</p>

        <h1>Weather Explorer</h1>

        <p className="weather-description">
          Search any city to see its current weather information.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          <button onClick={handleSearch}>Search</button>
        </div>

        {loading && <p className="status">Loading weather...</p>}

        {weather && !loading && (
          <div className="weather-card">
            <div>
              <p className="city-name">
                {weather.name}, {weather.sys.country}
              </p>

              <h2>{Math.round(weather.main.temp)}°C</h2>

              <p className="condition">
                {weather.weather[0].description}
              </p>
            </div>

            <div className="weather-details">
              <div>
                <span>💧</span>
                <p>Humidity</p>
                <strong>{weather.main.humidity}%</strong>
              </div>

              <div>
                <span>🌡️</span>
                <p>Feels Like</p>
                <strong>
                  {Math.round(weather.main.feels_like)}°C
                </strong>
              </div>

              <div>
                <span>💨</span>
                <p>Wind Speed</p>
                <strong>{weather.wind.speed} m/s</strong>
              </div>
            </div>
          </div>
        )}

        {!weather && !loading && (
          <p className="status">
            City not found. Please try another city.
          </p>
        )}
      </div>
    </section>
  );
}

export default Weather;