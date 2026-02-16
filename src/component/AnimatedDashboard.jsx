import { useState } from "react";
import HourRow from "./HourlyRow";

export default function Dashboard() {
  const [animateTrigger, setAnimateTrigger] = useState(0);

  const hours = [
    {
      hour: "06:00",
      data: {
        running: 60,
        idle: 0,
        stopped: 0,
        breakdown: 0,
        output: 60,
        rejects: 0,
      },
    },
    {
      hour: "10:00",
      data: {
        running: 28,
        idle: 8,
        stopped: 15,
        breakdown: 9,
        output: 26,
        rejects: 0,
      },
    },
    {
      hour: "11:00",
      data: {
        running: 30,
        idle: 0,
        stopped: 25,
        breakdown: 5,
        output: 29,
        rejects: 1,
      },
    },
  ];

  const reloadAnimation = () => {
    setAnimateTrigger((prev) => prev + 1);
  };

  return (
    <div className="dashboard">
      <h2>Hourly Status Overview</h2>

      <button onClick={reloadAnimation}>Reload Animation</button>

      {hours.map((item, index) => (
        <HourRow
          key={index}
          hour={item.hour}
          data={item.data}
          animateTrigger={animateTrigger}
        />
      ))}
    </div>
  );
}
