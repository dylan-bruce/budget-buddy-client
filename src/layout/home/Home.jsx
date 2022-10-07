import React, { useState } from "react";

import BillList from '../../components/bill/billList/BillList';
import TypeList from "../../components/type/typeList/TypeList";
import Cal from "../../components/cal/Cal";
import IncomeList from "../../components/income/incomeList/IncomeList";

import "./Home.css";

function Home() {

  const [bills, setBills] = useState([

    /**
     * Type can only be one of the following:
     * 
     * House
     * Vehicle
     * Utilities
     * Food
     * Savings
     * Spending
     * 
     */
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

  const [income, setIncome] = useState([
    {
      employeer: "XYZ Inc",
      salary: 75000.00
    },
    {
      employeer: "Side Job",
      salary: 10000.00
    }
  ])

  //const [newIncome, setNewIncome] = useState({employeer: "", salary: ""});

  return (
    <div className='home'>
      <alert>This page is a work in progress.  It is not functional at the moment, and does not display properly on small screens (phone or tablets).</alert>
        <h2>Overview</h2>
        <div className="homecontent border">
            <Cal />
        </div>
        <h3>Income and Expense</h3>
        <div className="homecontent border">
          <BillList bills={bills} />
          <IncomeList income={income} />
        </div>
        <div className="billtypes">
          <TypeList bills={bills} />
        </div>
    </div>
  )
}

export default Home