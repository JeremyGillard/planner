import React from 'react';
import dayjs from 'dayjs';

function getDelimiterColor(i) {
  return ['palegreen', 'sandybrown', 'mediumturquoise'][i];
}

export default function Day({ pickedDate }) {
  const date = pickedDate;

  const day = {
    date: dayjs(date),
    objectives: [
      {
        title: 'Improve React skills',
        category: 'Learning',
        from: '9:30',
        to: '12:45',
      },
      {
        title: 'CSS grid + Sass architecture',
        category: 'Learning',
        from: '13:45',
        to: '15:00',
      },
      {
        title: 'Improve my portfolio',
        category: 'Work',
        from: '15:15',
        to: '17:45',
      },
    ],
  };

  return (
    <div className="day">
      <header>
        <h1>{day.date.format('dddd DD/MM')}</h1>
        <button type="button">
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
      </header>
      <main>
        {day.objectives.map((objective, i) => (
          <div key={objective.title + objective.from} className="task">
            <div
              className="time"
              style={{ borderRight: `0.2rem solid ${getDelimiterColor(i)}` }}
            >
              <p className="from">{objective.from}</p>
              <p className="to">{objective.to}</p>
            </div>
            <div className="description">
              <p className="title">{objective.title}</p>
              <p className="category">{objective.category}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
