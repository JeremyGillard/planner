import React from "react";

export default function HabitTrackerHeader({ days, handleHabitAddition }) {
  return (
    <React.Fragment>
      <div>
        <button onClick={handleHabitAddition}>New Habit</button>
      </div>
      {days.map((day, i) => {
        return (
          <div key={i}>
            <h2>{day.format("dddd DD/MM")}</h2>
          </div>
        );
      })}
    </React.Fragment>
  );
}
