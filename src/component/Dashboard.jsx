import { useState } from "react";
import HourlyRow from "./HourlyRow";
import "./dashboard.css";

export default function Dashboard() {
  const [reloadKey, setReloadKey] = useState(0);

  const hours = [
    {
      hour: "14:00",
      data: {
        running: 120,
        idle: 15,
        stopped: 40,
        breakdown: 20,
        output: 59,
        rejects: 1,
      },
    },
    {
      hour: "15:00",
      data: {
        running: 0,
        idle: 0,
        stopped: 0,
        breakdown: 0,
        output: 0,
        rejects: 0,
      },
    },
    {
      hour: "16:00",
      data: {
        running: 0,
        idle: 0,
        stopped: 0,
        breakdown: 0,
        output: 0,
        rejects: 0,
      },
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Shift Hourly Analysis Dashboard</h2>
        <button onClick={() => setReloadKey((prev) => prev + 1)}>
          Reload Animation
        </button>
      </div>

      <div className="kpi-row">
        <div className="card">Production Plan</div>
        <div className="card">OEE 68%</div>
        <div className="card">Avg Hourly 59</div>
        <div className="card">Last Hour 67</div>
        <div className="card">Quality 98%</div>
      </div>

      <div className="hourly-section">
        <div className="table-header">
          <div>Hour</div>
          <div>Minutes</div>
          <div>Output</div>
          <div>Rejects</div>
        </div>

        {hours.map((item, index) => (
          <HourlyRow
            key={index}
            hour={item.hour}
            data={item.data}
            reloadKey={reloadKey}
          />
        ))}
      </div>
    </div>
  );
}
