import "../styles/weather.css";
import Weather from "./Weather";
function Weathers(props) {
  const weather = props.weather;

  const weathers = weather.map((item) => {
    return <Weather key={item.Date} {...item} />;
  });
  return <section className="logs bg-slate-200">{weathers}</section>;
}
export default Weathers;
