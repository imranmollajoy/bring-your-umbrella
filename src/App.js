import "./App.css";
import {
  Footer,
  WeatherReportTitle,
  DummyCard,
  Weathers,
  SampleChart,
} from "./components";

function App() {
  return (
    <div className="App">
      <WeatherReportTitle />
      <DummyCard />
      {/* <SampleChart /> */}
      <Weathers />
      <Footer />
    </div>
  );
}

export default App;
