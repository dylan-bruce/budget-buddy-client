import React from 'react'
import "./TypeCard.css";

function TypeCard({ bill, billTypes }) {
  return (
    <div className='typecard'>
        <h4>{bill.name}</h4>
        <p>$$ or X%</p>
    </div>
  )
}

export default TypeCard