import React, { useEffect, useState } from "react";
import HabitTrackerAdder from "./HabitTrackerAdder";
import HabitTrackerHeader from "./HabitTrackerHeader";
import HabitTrackerRow from "./HabitTrackerRow";
import dayjs from "dayjs";
import _ from "lodash";
import "./HabitTracker.scss";

function getDateOperands() {
  let currentDay = dayjs().add(-1, "day").format("d");
  return _.range(-currentDay, 7 - currentDay);
}

function getDatesOfWeek() {
  return getDateOperands().map((operande) => dayjs().add(operande, "day"));
}

export default function HabitTracker() {
  const [days, setDays] = useState([]);
  const [habits, setHabits] = useState([]);
  const [habitAddition, setHabitAddition] = useState(false);
  const [habit, setHabit] = useState({
    name: "",
    days: [false, false, false, false, false, false, false],
  });

  useEffect(() => {
    setDays(getDatesOfWeek());
  }, []);

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

  const handleValidate = (e) => {
    if (e.key === "Enter" && habit.days.filter((value) => value).length) {
      console.log(habit.days.filter((value) => value));
      setHabits([...habits, habit]);
      setHabit({
        name: "",
        days: [false, false, false, false, false, false, false],
      });
      setHabitAddition(false);
    }
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
        <HabitTrackerHeader
          days={days}
          handleHabitAddition={handleHabitAddition}
        />
        {habits.map((habit) => (
          <HabitTrackerRow key={habit.name} habit={habit} />
        ))}
        {habitAddition ? renderNewHabit() : null}
      </div>
    </div>
  );
}
