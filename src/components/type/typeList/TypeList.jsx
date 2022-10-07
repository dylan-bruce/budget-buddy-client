import React, { useState } from 'react'
import "./TypeList.css";
import TypeCard from '../typeCard/TypeCard';

function TypeList({ bills }) {

    const [billTypes, setBillTypes] = useState([]);

    bills.forEach(bill => {
        if(!billTypes.includes(bill.type)) setBillTypes([...billTypes, bill.type]);
    })

    billTypes.forEach(type => {
        
    })

  return (
    <div className="list">
        <h3>Bill Types</h3>
        <div className="typelist">
            {bills.map((bill, index) => (
            <TypeCard
                bill={bill}
                index={index}
                key={index}
                billTypes={billTypes}
            />
            ))}
        </div>
    </div>
  )
}

export default TypeList