import React from "react";
import "./HabitTracker.scss";

export default function HabitTracker() {
  return (
    <div className="grid-container">
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
      <div>
        <input type="checkbox" name="monday" id="monday" />
      </div>
      <div>
        <input type="checkbox" name="tuesday" id="tuesday" />
      </div>
      <div>
        <input type="checkbox" name="wednesday" id="wednesday" />
      </div>
      <div>
        <input type="checkbox" name="thursday" id="thursday" />
      </div>
      <div>
        <input type="checkbox" name="friday" id="friday" />
      </div>
      <div>
        <input type="checkbox" name="saturday" id="saturday" />
      </div>
      <div>
        <input type="checkbox" name="sunday" id="sunday" />
      </div>
    </div>
  );
}
