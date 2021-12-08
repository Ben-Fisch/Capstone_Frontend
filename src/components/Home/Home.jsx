import { data, options } from "../data";
import { Line } from "react-chartjs-2";

export default function Home() {
  return (
    <div className="App">
      <h1>Weight Tracker</h1>
      <Line data={data} options={options} />
    </div>
  );
}
