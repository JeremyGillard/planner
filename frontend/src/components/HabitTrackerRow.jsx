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

  useEffect(() => {
    let finalState = true;
    habit.days.forEach((day, i) => {
      console.log(i, day !== checks[i]);
      if (day !== checks[i]) {
        finalState = false;
      }
    });
    console.log("finalState", finalState);
    setWeekCheck(finalState);
    console.log("weekCheck", weekCheck);
    console.log(habit.days);
    console.log(checks);
  }, [checks]);

  const handleWeekCheck = () => {
    habit.days.forEach((day, i) => {
      console.log(i, day !== checks[i]);
      if (day !== checks[i]) {
        return false;
      }
    });
    return true;
  };

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
      <div>
        <input type="checkbox" name="sunday" id="sunday" value={weekCheck} />
      </div>
    </React.Fragment>
  );
}
