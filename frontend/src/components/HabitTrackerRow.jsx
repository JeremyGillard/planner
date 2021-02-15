import React from "react";

export default function HabitTrackerRow({ habit }) {
  const renderDay = (day, i) => {
    if (day) {
      return (
        <div key={i}>
          <input type="checkbox" name="sunday" id="sunday" />
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
        <input type="checkbox" name="sunday" id="sunday" />
      </div>
    </React.Fragment>
  );
}
