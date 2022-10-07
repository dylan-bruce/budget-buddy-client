import React from 'react'
import BillCard from '../billCard/BillCard';

import "./BillList.css";

function BillList({ bills }) {
  return (
    <div className='bill-list'>
      <h4>Expense</h4>
      <ul>
        {bills.map((bill, index) => (
          <BillCard
            bill={bill}
            index={index}
            key={index}
          />
        ))}
      </ul>
      {/**
       * Input form to add new Expense
       */}
    </div>
  )
}

export default BillList