import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
/*import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";*/


import './App.css';

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./layout/home/Home";

function App() {



  return (
    <div className="app">
      <>
        <Header />
      </>
      <div className="routes">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
