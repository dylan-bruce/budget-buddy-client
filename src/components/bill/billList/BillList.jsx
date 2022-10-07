import React from 'react'
import BillCard from '../billCard/BillCard';

import "./BillList.css";

function BillList({ bills }) {
  return (
    <div className='bill-list'>
      <div className='bill-list-content'>
        <ul>
          {bills.map((bill, index) => (
            <BillCard
              bill={bill}
              index={index}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BillList