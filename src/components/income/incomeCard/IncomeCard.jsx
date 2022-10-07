import React from 'react'

function IncomeCard({ income }) {
  return (
    <li>Employeer: {income.employeer} - Salary: ${income.salary}</li>
  )
}

export default IncomeCard