import React from 'react'

function BillCard({ bill }) {
  return (
    <li>Name: {bill.name} - Amount: ${bill.amount} - Due Date: {bill.dueDate}</li>
  )
}

export default BillCard