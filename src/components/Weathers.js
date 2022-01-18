import { useEffect, useState } from "react";
import "../styles/weather.css";
import Weather from "./Weather";
function Weathers(props) {
   const [weather, setWeather] = useState([]);
   useEffect(() => {
      async function getData() {
         const res = await fetch(
            "https://raw.githubusercontent.com/imranmollajoy/bring-your-umbrella/main/data/data.json"
         );
         const data = await res.json();
         setWeather(data.DailyForecasts);
      }
      getData();
   }, []);

   const weathers = weather.map((item) => {
      return <Weather key={item.Date} {...item} />;
   });
   return <section className="logs bg-slate-200">{weathers}</section>;
}
export default Weathers;
