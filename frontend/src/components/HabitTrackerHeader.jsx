import React from "react";

export default function HabitTrackerHeader({ handleHabitAddition }) {
  return (
    <React.Fragment>
      <div>
        <button onClick={handleHabitAddition}>New Habit</button>
      </div>
      <div>
        <h2>Monday</h2>
      </div>
      <div>
        <h2>Tuesday</h2>
      </div>
      <div>
        <h2>Wednesday</h2>
      </div>
      <div>
        <h2>Thursday</h2>
      </div>
      <div>
        <h2>Friday</h2>
      </div>
      <div>
        <h2>Saturday</h2>
      </div>
      <div>
        <h2>Sunday</h2>
      </div>
      <div></div>
    </React.Fragment>
  );
}
