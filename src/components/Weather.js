/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// simple react component
function Weather(props) {
   const temperature = props.Temperature;
   const currentDate = toDateMonth(props.Date);
   function calculateHighestRain() {
      return props.Day.RainProbability + props.Night.RainProbability;
   }
   return (
      <div className={calculateHighestRain() > 50.0 ? "rainy" : "weather"}>
         <div className="weather--stats">
            <div>
               <h1 className="title">{currentDate}</h1>
               <h2 className="chances-of-rain normal">
                  <span className="bold">{calculateHighestRain()}%</span> chance
                  of rain
               </h2>
            </div>
            <div className="right-items">
               <div className="weather--top-stats">
                  <p>
                     Min{" "}
                     <span className="bold">
                        {temperature.Minimum.Value} °C
                     </span>
                  </p>{" "}
                  <p>
                     {" "}
                     Max{" "}
                     <span className="bold">
                        {temperature.Maximum.Value} °C
                     </span>
                  </p>
               </div>
               <p className="description">
                  Sun <span className="bold">{props.HoursOfSun} hour</span>
               </p>
            </div>
         </div>
      </div>
   );
}
export default Weather;

function toDateMonth(date) {
   const d = new Date(date);
   const month = d.getMonth() + 1;
   const newdate = d.getDate();
   return `${newdate} / ${month}`;
}
