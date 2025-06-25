   import React from 'react';
   import './index.css';

   const VisualInsights = ({ transactions }) => {
       const totalCredits = transactions.filter(t => t.type === 'credit').reduce((acc, t) => acc + t.amount, 0);
       const totalDebits = transactions.filter(t => t.type === 'debit').reduce((acc, t) => acc + t.amount, 0);
       const netBalance = totalCredits - totalDebits;

       return (
        <div className='box'>
            <div className='row'>
            <div className="summary-card credits">
                <p className="summary-label">Total Credits:</p>
                <p className="summary-amount">Rs. {totalCredits}</p>
            </div>
            <div className="summary-card debits">
                <p className="summary-label">Total Debits:</p>
                <p className="summary-amount">Rs.{totalDebits}</p>
            </div>
            </div>
            <div className="summary-card balance">
                <p className="summary-label">Net Balance:</p>
               <p className="summary-amount">Rs.{netBalance}</p>
           </div>
        </div>
       );
   };

   export default VisualInsights;
   