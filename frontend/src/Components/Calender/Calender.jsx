import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const today = new Date();
  const firstOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1)

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-xl rounded-2xl">
      <h2 className="text-center text-md font-semibold text-gray-700 mb-4">
        Select a Day
      </h2>

      <Calendar
        onChange={setDate}
        value={date}
        defaultView='month'
        maxDetail="month"
        minDetail='month'
        minDate={firstOfThisMonth}
        showNeighboringMonth={false}
        navigationLabel={({ date }) =>
          date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        }
        tileClassName={({ date, view }) =>
          view === 'month'
            ? 'text-sm text-gray-700 transition duration-200'
            : null
        }
        className="w-full"
      />
    </div>
  );
};

export default Calender;
