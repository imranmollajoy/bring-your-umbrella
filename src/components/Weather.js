/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// simple react component
import { monthNames } from "./MonthNames";
function Weather(props) {
  const temperature = props.Temperature;
  const currentDate = toDateMonth(props.Date);
  const day = props.Day;
  const night = props.Night;
  function calculateHighestRain() {
    return props.Day.RainProbability + props.Night.RainProbability;
  }
  return (
    <details className="weather">
      <summary className="weather--stats">
        <div>
          <h1
            className={`title bold ${
              calculateHighestRain() > 50.0 ? "red" : ""
            }`}
          >
            {currentDate}
          </h1>
          <span className="chances-of-rain">
            <h2
              className={`normal bold ${
                calculateHighestRain() > 50.0 ? "red" : ""
              }`}
            >
              {calculateHighestRain()}%{" "}
            </h2>
            <h3> chance of rain</h3>
          </span>
        </div>
        <div className="right-items">
          <div className="weather--top-stats">
            <p>
              Min <span className="bold">{temperature.Minimum.Value}°C</span>
            </p>{" "}
            <p>
              {" "}
              Max <span className="bold">{temperature.Maximum.Value}°C</span>
            </p>
          </div>
        </div>
      </summary>
      <div className="more-info">
        <div className="day-stats">
          <h2>Day</h2>
          <div className="stats-wrapper">
            <div className="stats-wrapper-left">
              <h3>{day.ShortPhrase}</h3>
              <p>Rain Probability {day.RainProbability}%</p>
              <p>
                {day.HasPrecipitation
                  ? "Rain may be occured"
                  : "Low chances of rain"}
              </p>
            </div>

            <div className="rain-data">
              {day.Rain.Value > 0 && <p>Total Rain {day.Rain.Value} mm</p>}
              {day.HoursOfRain > 0 && (
                <p>Total Raintime {day.HoursOfRain} hours</p>
              )}
            </div>
          </div>
        </div>
        <div className="night-stats">
          <h2>Night</h2>
          <div className="stats-wrapper">
            <div>
              <h3>{night.ShortPhrase}</h3>
              <p>Rain Probability {night.RainProbability}%</p>
              <p>
                {night.HasPrecipitation
                  ? "Rain may be occured"
                  : "Low chances of rain"}
              </p>
            </div>

            <div className="rain-data">
              {night.Rain.Value > 0 && <p>Total Rain {night.Rain.Value} mm</p>}
              {night.HoursOfRain > 0 && (
                <p>Total Raintime {day.HoursOfRain} hours</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </details>
  );
}
export default Weather;

function toDateMonth(date) {
  const d = new Date(date);
  const month = monthNames[d.getMonth()].slice(0, 3);
  const newdate = d.getDate();
  return `${newdate} ${month}`;
}
