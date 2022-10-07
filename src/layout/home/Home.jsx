import React, { useState } from "react";
import BillList from '../billList/BillList';
import Cal from "../cal/Cal";

import "./Home.css";

const Home = () => {

    
  const [bills, setBills] = useState([]);
  const [newBill, setNewBill] = useState({name: "", amount:"", dueDate: "", type: ""});

  return (
    <div className='home'>
        <h2>Overview</h2>
        <div className="homecontent">
            <Cal />
            <BillList />
        </div>
    </div>
  )
}

export default Home