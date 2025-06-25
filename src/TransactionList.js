   import React from 'react';
   import TransactionItem from './TransactionItem';
   import './index.css';

   const TransactionList = ({ transactions }) => {
       return (
           <ul>
               {transactions.map(transaction => (
                   <TransactionItem key={transaction._id} transaction={transaction} />
               ))}
           </ul>
       );
   };

   export default TransactionList;
   