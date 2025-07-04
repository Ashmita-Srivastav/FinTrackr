   const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');

   const app = express();
   app.use(cors());
   app.use(express.json());

   // Connect to MongoDB
   mongoose.connect('mongodb+srv://finUser:finpass123@cluster0.xgm3wk3.mongodb.net/fintrackr?retryWrites=true&w=majority&appName=Cluster0')
       .then(() => console.log('MongoDB connected'))
       .catch(err => console.error('MongoDB connection error:', err));

   // Define the transaction schema
   const transactionSchema = new mongoose.Schema({
       type: { type: String, enum: ['credit', 'debit'], required: true },
       amount: { type: Number, required: true },
       category: { type: String, required: true },
       description: { type: String },
       timestamp: { type: Date, default: Date.now }
   });

   const Transaction = mongoose.model('Transaction', transactionSchema);

   // Root route
   app.get('/', (req, res) => {
       res.send('Welcome to the FinTrackr API! Use /api/transactions to interact with transactions.');
   });

   // API Endpoints
   app.post('/api/transactions', async (req, res) => {
       try {
           const transaction = new Transaction(req.body);
           await transaction.save();
           res.status(201).send(transaction);
       } catch (error) {
           res.status(400).send({ error: 'Error creating transaction' });
       }
   });

   app.get('/api/transactions', async (req, res) => {
       try {
           const transactions = await Transaction.find();
           res.send(transactions);
       } catch (error) {
           res.status(500).send({ error: 'Error fetching transactions' });
       }
   });

   // Start the server
   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   