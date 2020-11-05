import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Crouting = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="bdy">
      <h3 className="bdy1">1.Showing and time</h3>
      <DatePicker
        selected={startDate}
        showTimeInput
        onChange={(date) => setStartDate(date)}
        dateFormat="yyy/MM-dd"
      />
      <h3 className="bdy1">2.Showing date picker blolcking previous date</h3>
      <DatePicker
        selected={startDate}
        isClearable
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
      />
      <h3 className="bdy1">3.Showing default date with fromat</h3>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <h3 className="bdy1">4.Removing Weekands</h3>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        filterDate={(date) => date.getDay() != 6 && date.getDay() != 0}
      />
      <br />
      <h3 className="bdy1">5.With month and year dropdownMode</h3>
      <DatePicker
        selected={startDate}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        onChange={(date) => setStartDate(date)}
        monthsShown={2}
        inlineshowMonthDropdown
      />
      <h3 className="bdy1">6.Showing default date with fromat</h3>
      <DatePicker
        selected={startDate}
        showYearPicker
        onChange={(date) => setStartDate(date)}
        dateFormat="yyy"
      />
    </div>
  );
};
export default Crouting;
