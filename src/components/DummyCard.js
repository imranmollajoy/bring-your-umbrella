import "../styles/dummy-card.css";
function DummyCard(props) {
  const weather = props.weather;

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
      for (i = 0; i < weather.length; i++) {
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
    for (i = 0; i < weather.length; i++) {
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
          <div className="lowest-temp-stats roboto">
            <h2 className="value bold roboto">
              {getHighestTemperature("lowest").temp} °C
            </h2>
            <h3 className="bold">
              {" "}
              {getHighestTemperature("lowest").date}/
              {getHighestTemperature("lowest").month}
            </h3>
          </div>
        </div>
        <div className="card highest-card">
          <div className="card highest-temp-card">
            <h1 className="roboto">
              {getHighestTemperature("highest").temp} °C
            </h1>
            <h2>
              {getHighestTemperature("highest").date}/
              {getHighestTemperature("highest").month}
            </h2>
            <h3>Highest Temperature</h3>
          </div>
          <div className="card rain-card">
            <h1 className="roboto">
              {getHighestRain().date}/{getHighestRain().month}
            </h1>
            <h1>{getHighestRain().probability}%</h1>
            <h3>Chances of Rain</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DummyCard;
