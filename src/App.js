import "./App.css";
import { Footer, WeatherReportTitle, DummyCard, Weathers } from "./components";

function App() {
   return (
      <div className="App">
         <WeatherReportTitle />
         <DummyCard />
         <Weathers />
         <Footer />
      </div>
   );
}

export default App;
