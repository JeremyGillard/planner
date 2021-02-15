import React, { useState } from "react";
import "./HabitTracker.scss";
import HabitTrackerAdder from "./HabitTrackerAdder";
import HabitTrackerHeader from "./HabitTrackerHeader";
import HabitTrackerRow from "./HabitTrackerRow";

export default function HabitTracker() {
  const [habits, setHabits] = useState([
    {
      name: "Meditation",
      days: [false, true, false, true, false, false, true],
    },
  ]);

  const handleHabitAddition = () => {
    console.log("Addition");
    setHabits([
      ...habits,
      { name: "", days: [false, false, false, false, false, false, false] },
    ]);
  };

  const handleChangeHabitName = (e) => {
    const newHabits = [...habits];
    newHabits[habits.length - 1] = {
      name: e.target.value,
      days: habits[habits.length - 1].days,
    };
    setHabits(newHabits);
  };

  const handleChangeHabitDays = (index) => {
    const newHabits = [...habits];
    const newDays = [...habits[habits.length - 1].days];
    console.log(index);
    newDays[index] = !newDays[index];
    newHabits[habits.length - 1] = {
      name: habits[habits.length - 1].name,
      days: newDays,
    };
    setHabits(newHabits);
  };

  return (
    <div>
      <div className="grid-container">
        <HabitTrackerHeader handleHabitAddition={handleHabitAddition} />
        <HabitTrackerAdder
          habit={habits[habits.length - 1]}
          handleChangeHabitName={handleChangeHabitName}
          handleChangeHabitDays={handleChangeHabitDays}
        />
        {habits.map((habit) => (
          <HabitTrackerRow key={habit.name} habit={habit} />
        ))}
      </div>
    </div>
  );
}
