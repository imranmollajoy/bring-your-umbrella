import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Bar,
} from "recharts";
import "../styles/sample-chart.css";
const data = [
  { name: "21", Minimum: 11, Maximum: 25, Rain: 0 },
  { name: "22", Minimum: 14, Maximum: 27, Rain: 0 },
  { name: "23", Minimum: 14, Maximum: 26, Rain: 0 },
  { name: "24", Minimum: 16, Maximum: 28, Rain: 0.6 },
  { name: "25", Minimum: 15, Maximum: 23, Rain: 7.1 },
];

function SampleChart() {
  return (
    <div className="chart-wrapper">
      <ResponsiveContainer
        width="100%"
        height={400}
        className="chart-container"
      >
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="Minimum"
            stroke="#0000ff"
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          />
          <Line
            type="monotone"
            dataKey="Maximum"
            stroke="#ff0000"
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          />
          <Line
            type="monotone"
            dataKey="Rain"
            stroke="#000"
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SampleChart;
