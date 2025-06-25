import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './TransactionForm'; 
import TransactionList from './TransactionList'; 
import VisualInsights from './VisualInsights'; 
import './index.css';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        const response = await axios.get('http://localhost:5000/api/transactions');
        setTransactions(response.data);
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    const handleAddTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
    };

    return (
        <div className='container'>
          <header>
            <h1>FinTrackr</h1>
            <h3>Smart Expense Visualizer</h3>
          </header>
          <section className="transaction-input-section">
           
              <TransactionForm onAdd={handleAddTransaction} />
          </section>
          <section className="summary-section">
              <VisualInsights transactions={transactions} />
          </section>
            <TransactionList transactions={transactions} />
          </div>
    );
};

export default App; 
