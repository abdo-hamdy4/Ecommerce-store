import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';

const app = express();

dotenv.config();
app.use(express.json());

// Routes
// app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connectDB();
});
