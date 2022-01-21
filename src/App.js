import "./App.css";
import { useState, useEffect } from "react";
import {
  Footer,
  WeatherReportTitle,
  DummyCard,
  Weathers,
  SampleChart,
} from "./components";

function App() {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/imranmollajoy/bring-your-umbrella/master/data/data.json"
      );
      const data = await res.json();
      setWeather(data.DailyForecasts);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <WeatherReportTitle />
      <DummyCard weather={weather} />
      <Weathers weather={weather} />
      <SampleChart weather={weather} />
      <Footer />
    </div>
  );
}

export default App;
