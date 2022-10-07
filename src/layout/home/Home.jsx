import React, { useState } from "react";

import BillList from '../../components/bill/billList/BillList';
import TypeList from "../../components/type/typeList/TypeList";
import Cal from "../../components/cal/Cal";

import "./Home.css";

function Home() {

    
  const [bills, setBills] = useState([
    {
      name: "Car Payment",
      amount: 400.00,
      dueDate: "25th",
      type: "Vehicle"
    },
    {
      name: "Water",
      amount: 100.00,
      dueDate: "11th",
      type: "Utilities"
    },
    {
      name: "Gas",
      amount: 50.00,
      dueDate: "20th",
      type: "Utilities"
    },
    {
      name: "Mortgage",
      amount: 1500.00,
      dueDate: "1st",
      type: "House"
    }
  ]);

  //const [newBill, setNewBill] = useState({name: "", amount:"", dueDate: "", type: ""});

  return (
    <div className='home'>
        <h2>Overview</h2>
        <div className="homecontent">
            <Cal />
        </div>
        <h3>Income and Expense</h3>
        <div className="homecontent border">
          <BillList bills={bills} />
        </div>
        <div className="billtypes">
          <TypeList bills={bills} />
        </div>
    </div>
  )
}

export default Home