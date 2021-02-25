import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Day from './Day';

export default function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="app">
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div>
        <Day pickedDate={value} />
      </div>
    </div>
  );
}
