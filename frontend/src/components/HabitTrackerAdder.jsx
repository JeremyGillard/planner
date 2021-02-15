import React from "react";
import "./HabitTrackerAdder.scss";

export default function HabitTrackerAdder({
  habit,
  handleChangeHabitName,
  handleChangeHabitDays,
}) {
  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          value={habit.name}
          onChange={handleChangeHabitName}
        />
      </div>
      <div
        className={habit.days[0] ? "colored" : ""}
        onClick={() => handleChangeHabitDays(0)}
      ></div>
      <div
        className={habit.days[1] ? "colored" : ""}
        onClick={() => handleChangeHabitDays(1)}
      ></div>
      <div
        className={habit.days[2] ? "colored" : ""}
        onClick={() => handleChangeHabitDays(2)}
      ></div>
      <div
        className={habit.days[3] ? "colored" : ""}
        onClick={() => handleChangeHabitDays(3)}
      ></div>
      <div
        className={habit.days[4] ? "colored" : ""}
        onClick={() => handleChangeHabitDays(4)}
      ></div>
      <div
        className={habit.days[5] ? "colored" : ""}
        onClick={() => handleChangeHabitDays(5)}
      ></div>
      <div
        className={habit.days[6] ? "colored" : ""}
        onClick={() => handleChangeHabitDays(6)}
      ></div>
    </React.Fragment>
  );
}
