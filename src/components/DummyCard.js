import { useEffect, useState } from "react";
import "../styles/dummy-card.css";
function DummyCard() {
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

   function getHighestRain() {
      var obj = {
         date: "",
         probability: 0,
         month: "",
      };
      var dayProbability = weather.map((item) => item.Day.RainProbability);
      var nightProbability = weather.map((item) => item.Night.RainProbability);
      var sum = dayProbability.map(function (num, idx) {
         return num + nightProbability[idx];
      });

      obj.probability = Math.max(...sum);
      var index = sum.indexOf(obj.probability);

      for (var i = 0; i < weather.length; i++) {
         if (i === index) {
            obj.date = weather[i].Date.slice(8, 10);
            obj.month = weather[i].Date.slice(5, 7);
         }
      }

      return obj;
   }
   function getHighestTemperature(whichOn) {
      var highOrLow;
      var index;
      var arr = [];
      if (whichOn === "highest") {
         for (var i = 0; i < weather.length; i++) {
            arr.push(weather[i].Temperature.Maximum.Value);
         }
         highOrLow = Math.max(...arr);
      } else if (whichOn === "lowest") {
         for (var i = 0; i < weather.length; i++) {
            arr.push(weather[i].Temperature.Minimum.Value);
         }
         highOrLow = Math.min(...arr);
      }
      index = arr.indexOf(highOrLow);
      var obj = {
         temp: "12",
         date: "21",
         month: "January",
      };
      for (var i = 0; i < weather.length; i++) {
         if (i === index) {
            if (whichOn === "highest") {
               obj.temp = weather[i].Temperature.Maximum.Value;
            } else if (whichOn === "lowest") {
               obj.temp = weather[i].Temperature.Minimum.Value;
            }
            obj.date = weather[i].Date.slice(8, 10);
            obj.month = weather[i].Date.slice(5, 7);
         }
      }
      return obj;
   }

   return (
      <div className="widget">
         <div className="card stats-card">
            <div className="card lowest-card">
               <h3>Lowest Temperature</h3>
               <div className="lowest-temp-stats">
                  <span className="value">
                     {getHighestTemperature("lowest").temp} °C
                  </span>
                  <h3>
                     {" "}
                     {getHighestTemperature("lowest").date}/
                     {getHighestTemperature("lowest").month}
                  </h3>
               </div>
            </div>
            <div className="card highest-card">
               <div className="card highest-temp-card">
                  <h1>{getHighestTemperature("highest").temp} °C</h1>
                  <h2>
                     {getHighestTemperature("highest").date}/
                     {getHighestTemperature("highest").month}
                  </h2>
                  <h3>Highest Temperature</h3>
               </div>
               <div className="card rain-card">
                  <h1>
                     {getHighestRain().date}/{getHighestRain().month}
                  </h1>
                  <h1>{getHighestRain().probability}%</h1>
                  <h3>Chances of Rain</h3>
               </div>
            </div>
         </div>
         <div className="card graph-card">graph</div>
      </div>
   );
}

export default DummyCard;
