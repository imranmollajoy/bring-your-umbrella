import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import d from "../dummydata.json";
function MinMaxGraph() {
   let MultiChart;
   const [chartData, setChartData] = useState({});

   useEffect(() => {
      async function getData() {
         const res = await fetch(
            "https://raw.githubusercontent.com/imranmollajoy/bring-your-umbrella/master/data/data.json"
         );
         const data = await res.json();
         setChartData({
            labels: d.DailyForecasts.map((item) => item.Date.slice(5, 7)),
            datasets: [
               {
                  type: "line",
                  data: data.DailyForecasts.map(
                     (item) => item.Temperature.Maximum.Value
                  ),
                  label: "Maximum",
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
               },
               {
                  type: "line",
                  data: data.DailyForecasts.map(
                     (item) => item.Temperature.Minimum.Value
                  ),
                  label: "Minimum",
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
               },
            ],
         });
      }
      getData();
      buildMultiChart();
   }, []);

   const buildMultiChart = () => {
      // @ts-ignore
      var ctx = document.getElementById("myChart").getContext("2d");
      if (typeof MultiChart !== "undefined") MultiChart.destroy();
      console.log(chartData);
      MultiChart = new Chart(ctx, {
         data: {
            labels: d.DailyForecasts.map(
               (item) => item.Date.slice(8, 10) + "/" + item.Date.slice(5, 7)
            ),
            datasets: [
               {
                  type: "line",
                  data: d.DailyForecasts.map(
                     (item) => item.Temperature.Maximum.Value
                  ),
                  label: "Maximum",
                  fill: false,
                  borderColor: "#f44336",
                  tension: 0.1,
               },
               {
                  type: "line",
                  data: d.DailyForecasts.map(
                     (item) => item.Temperature.Minimum.Value
                  ),
                  label: "Minimum",
                  fill: false,
                  borderColor: "#3f51b5",
                  tension: 0.1,
               },
            ],
         },
         options: {
            scales: {
               x: {
                  grid: {
                     display: false,
                  },
               },
            },
            animation: {
               duration: 750,
            },
            plugins: {
               // @ts-ignore
               zoom: {
                  zoom: {
                     wheel: {
                        enabled: true,
                     },
                     pinch: {
                        enabled: true,
                     },
                     mode: "xy",
                  },
               },
            },
         },
      });
   };

   return (
      <div className="min-max-graph">
         <div className="min-max-graph-container">
            <canvas id="myChart"></canvas>
         </div>
      </div>
   );
}
export default MinMaxGraph;
