import React, { useState, useEffect } from "react";

export default function HabitTrackerRow({ habit }) {
  const [checks, setChecks] = useState([]);
  const [weekCheck, setWeekCheck] = useState(false);

  useEffect(() => {
    const checks = [];
    for (let i = 0; i < habit.days.length; i++) {
      checks.push(false);
    }
    setChecks(checks);
  }, [setChecks]);

  const handleCheck = (i) => {
    const newChecks = [...checks];
    newChecks[i] = !newChecks[i];
    setChecks(newChecks);
  };

  const renderDay = (day, i) => {
    if (day) {
      return (
        <div key={i}>
          <input
            value={checks[i]}
            onChange={() => handleCheck(i)}
            type="checkbox"
            name="sunday"
            id="sunday"
          />
        </div>
      );
    } else {
      return <div key={i}></div>;
    }
  };

  return (
    <React.Fragment>
      <div>
        <h2>{habit.name}</h2>
      </div>
      {habit.days.map((day, i) => renderDay(day, i))}
    </React.Fragment>
  );
}
