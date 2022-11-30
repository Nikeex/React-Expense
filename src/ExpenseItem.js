import React from 'react'
import './ExpenseItem.css';
function Expense() {
  return (
    <div className='expense-item'>
         <div>November 30th 2022</div>
         <div className='expense-item__description'>
            <h2>Car Insurance</h2>
            <div className='expense-item__price'>Rs.30,000</div>
         </div>
    </div>
  );
}

export default Expense