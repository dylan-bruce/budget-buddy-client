import React from 'react'
import "./TypeCard.css";

function TypeCard({ bill, billTypes }) {
  return (
    <div className='typecard'>
        <h3>{bill.name}</h3>
        <p>{}</p>
    </div>
  )
}

export default TypeCard