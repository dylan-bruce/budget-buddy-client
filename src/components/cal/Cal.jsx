import React from 'react'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import DatePicker from "react-datepicker";

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

function Cal() {
  return (
    <div className='cal'>
      <Calendar 
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{height: 500, width: 750, padding: ".5rem 1rem .5rem 1rem"}}
      />
    </div>
  )
}

export default Cal