import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendar from '@skyscanner/backpack-web/bpk-component-calendar';
import React, { useState } from 'react';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const formatDateFull = (date) =>
  date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

const formatMonth = (date) =>
  date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText
            tagName="h1"
            textStyle="xxl"
            className={getClassName('App__heading')}
          >
            Flight Schedule
          </BpkText>
        </div>
      </header>

      <main className={getClassName('App__main')}>
        <BpkCalendar
          id="flight-schedule-calendar"
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          formatDateFull={formatDateFull}
          formatMonth={formatMonth}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          month={currentMonth}
          onMonthChange={(event, { month }) => setCurrentMonth(month)}
          onDateSelect={setSelectedDate}
          date={selectedDate}
        />

        <BpkButton onClick={() => alert('It works!')}>
          Continue
        </BpkButton>
      </main>
    </div>
  );
};

export default App;