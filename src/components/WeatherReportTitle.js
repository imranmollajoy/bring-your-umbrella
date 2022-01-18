import "../styles/weather-report-title.css";
import { monthNames } from "./MonthNames";
function WeatherReportTitle() {
   function get() {
      var sD = new Date();
      var startDate = sD.getDate();
      var eD = addDays(sD, 4);
      var endDate = eD.getDate();
      var startMonthName = monthNames[sD.getMonth()];
      var endMonthName = monthNames[eD.getMonth()];
      return { startDate, endDate, startMonthName, endMonthName };
   }
   function addDays(date, days) {
      const copy = new Date(Number(date));
      copy.setDate(date.getDate() + days);
      return copy;
   }
   return (
      <div className="weather-report-title">
         <h1 className="montserrat">Weather Report</h1>

         {get().startMonthName === get().endMonthName && (
            <h2>
               {get().startDate}-{get().endDate} {get().startMonthName}
            </h2>
         )}
         {get().startMonthName !== get().endMonthName && (
            <h2>
               {get().startDate} {get().startMonthName}-{get().endDate}{" "}
               {get().endMonthName}
            </h2>
         )}

         <h3>Dumki</h3>
      </div>
   );
}

export default WeatherReportTitle;
