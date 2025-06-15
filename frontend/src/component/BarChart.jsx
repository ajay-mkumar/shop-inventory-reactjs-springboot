import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import styles from "./BarChart.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const data = {
  labels: ["Red", "Blue", "Green"],
  datasets: [
    {
      label: "Votes",
      data: [12, 19, 3],
      backgroundColor: ["red", "blue", "green"],
    },
  ],
};

function BarChart() {
  return(
  <div className={styles.barchartContainer}>
    <Bar data={data} className={styles.barchart} />
    <p>today's sales progress</p>
  </div>)
  ;
}

export default BarChart;
