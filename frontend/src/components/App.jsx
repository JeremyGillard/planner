import React from "react";
import HabitTracker from "./HabitTracker";
import dayjs from "dayjs";
import _ from "lodash";

function getDateOperands() {
  let currentDay = dayjs().add(-1, "day").format("d");
  return _.range(-currentDay, 7 - currentDay);
}

function getDatesOfWeek() {
  return getDateOperands().map((operande) => dayjs().add(operande, "day"));
}

const planning = [...getDatesOfWeek()];

export default function App() {
  return (
    <div>
      {planning.map((day) => (
        <p>{day.format("dddd DD/MM")}</p>
      ))}
    </div>
  );
}
