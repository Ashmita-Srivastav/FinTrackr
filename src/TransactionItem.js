   import React from 'react';
   import './index.css';

   const TransactionItem = ({ transaction }) => {
       return (
           <li>
               <strong>{transaction.type}</strong>: Rs.{transaction.amount} - {transaction.category} ({transaction.description})
           </li>
       );
   };

   export default TransactionItem; 
   