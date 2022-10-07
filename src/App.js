import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";


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
