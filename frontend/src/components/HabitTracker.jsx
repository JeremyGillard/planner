import React, { useState } from "react";
import "./HabitTracker.scss";
import HabitTrackerAdder from "./HabitTrackerAdder";
import HabitTrackerHeader from "./HabitTrackerHeader";
import HabitTrackerRow from "./HabitTrackerRow";

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [habitAddition, setHabitAddition] = useState(false);
  const [habit, setHabit] = useState({
    name: "",
    days: [false, false, false, false, false, false, false],
  });

  const handleHabitAddition = () => {
    setHabitAddition(true);
  };

  const handleChangeHabitName = (e) => {
    const newHabit = { ...habit };
    newHabit.name = e.target.value;
    setHabit(newHabit);
  };

  const handleChangeHabitDays = (index) => {
    const newHabit = { ...habit };
    const newDays = [...newHabit.days];
    newDays[index] = !newDays[index];
    newHabit.days = newDays;
    setHabit(newHabit);
  };

  const handleValidate = () => {
    setHabits([...habits, habit]);
    setHabit({
      name: "",
      days: [false, false, false, false, false, false, false],
    });
    setHabitAddition(false);
  };

  const renderNewHabit = () => {
    return (
      <HabitTrackerAdder
        habit={habit}
        handleChangeHabitName={handleChangeHabitName}
        handleChangeHabitDays={handleChangeHabitDays}
        handleValidate={handleValidate}
      />
    );
  };

  return (
    <div>
      <div className="grid-container">
        <HabitTrackerHeader handleHabitAddition={handleHabitAddition} />
        {habits.map((habit) => (
          <HabitTrackerRow key={habit.name} habit={habit} />
        ))}
        {habitAddition ? renderNewHabit() : null}
      </div>
    </div>
  );
}
