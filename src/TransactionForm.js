   import React, { useState } from 'react';
   import axios from 'axios';
   import './index.css';

   const TransactionForm = ({ onAdd }) => {
       const [type, setType] = useState('credit');
       const [amount, setAmount] = useState('');
       const [category, setCategory] = useState('Food');
       const [description, setDescription] = useState('');

       const handleSubmit = async (e) => {
           e.preventDefault();
           const newTransaction = { type, amount, category, description };
           await axios.post('http://localhost:5000/api/transactions', newTransaction);
           onAdd(newTransaction);
           setAmount('');
           setDescription('');
       };

       return (
           <form onSubmit={handleSubmit}>
            <div className="input-group">
            <label for="transactionType" className="input-label">Type</label>
               <select id="transactionType" className="select-field" value={type} onChange={(e) => setType(e.target.value)}>
                   <option value="credit">Credit</option>
                   <option value="debit">Debit</option>
               </select>
            </div>
            <div className="input-group">
                <label for="category" className="input-label">Amount(Rs.)</label>
               <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder="Amount" />
               <label for="category" className="input-label">Category</label>
               <select id="category" className="select-field" value={category} onChange={(e) => setCategory(e.target.value)}>
                   <option value="Food">Food</option>
                   <option value="Travel">Travel</option>
                   <option value="Billing">Billing</option>
                   <option value="Others">Others</option>
               </select>
            </div>
            <div className="input-group">
                <label for="description" class="input-label">Description</label>
               <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            </div>
               <button className="add-button" type="submit">Add Transaction</button>
            </form>
       );
   };

   export default TransactionForm;
   