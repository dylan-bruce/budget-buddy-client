import { Route, Routes } from "react-router-dom";
import React from "react";


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
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
