import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import "../styles/sample-chart.css";

function SampleChart(props) {
  const weather = props.weather;
  const newWeather = weather.map((item) => {
    return {
      name: item.Date.slice(8, 10) + "/" + item.Date.slice(5, 7),
      Minimum: item.Temperature.Minimum.Value,
      Maximum: item.Temperature.Maximum.Value,
      RainProbability: item.Day.RainProbability + item.Night.RainProbability,
      RainAmount: item.Day.Rain.Value + item.Night.Rain.Value,
    };
  });
  const MinMaxTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <p className="label">{`Minimum temperature ${payload[0].value}°C`}</p>
          <p className="label">{`Maximum temperature ${payload[1].value}°C`}</p>
        </div>
      );
    }

    return null;
  };
  const RainTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <p className="label">{`Rain probability ${payload[0].value}%`}</p>
          <p className="label">{`Rain Amount ${payload[1].value}mm`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="chart-wrapper">
      <ResponsiveContainer
        width="100%"
        height={600}
        className="chart-container"
      >
        <LineChart data={newWeather}>
          <Line
            type="monotone"
            dataKey="Minimum"
            stroke="#2196f3"
            margin={{ top: 4, right: 4, bottom: 0, left: 0 }}
            label={newWeather.map((item) => item.Minimum)}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Maximum"
            stroke="#f44336"
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            label={newWeather.map((item) => item.Maximum)}
            dot={false}
          />
          {/* <ReferenceLine y={getMinMaxTemp().Max} label="Max" stroke="red" />
          <ReferenceLine y={getMinMaxTemp().Min} label="Min" stroke="blue" /> */}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<MinMaxTooltip />} />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer
        width="100%"
        height={400}
        className="chart-container"
      >
        <AreaChart
          width={500}
          height={400}
          data={newWeather}
          margin={{
            top: 4,
            right: 4,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<RainTooltip />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="RainProbability"
            stackId="2"
            stroke="#ff5722"
            fill="#fbc02d"
          />
          <Area
            type="monotone"
            dataKey="RainAmount"
            stackId="3"
            stroke="#303f9f"
            fill="#303f9f"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SampleChart;
