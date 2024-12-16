const express = require('express');
const dotenv = require('dotenv');
const config = require('config');
const registerRouter = require("./routes/register")
const LoginRouter = require("./routes/login")

// import { connectDB } from './lib/db.js';

const app = express();

dotenv.config();
app.use(express.json());

// Routes
// app.use('/api/auth', authRoute);
app.use("/",LoginRouter)
app.use("/",registerRouter)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  
});
