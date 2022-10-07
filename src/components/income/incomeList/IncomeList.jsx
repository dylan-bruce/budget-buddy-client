import React from 'react'
import "./IncomeList.css";
import IncomeCard from "../incomeCard/IncomeCard";

function IncomeList({ income }) {
    return (
        <div className='income-list'>
          <h4>Income</h4>
          <ul>
            {income.map((inc, index) => (
              <IncomeCard
                income={inc}
                index={index}
                key={index}
              />
            ))}
          </ul>
          {/**
           * Input form to add new Income
           */}
        </div>
      )
}

export default IncomeList