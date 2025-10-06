import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import contactusRoutes from './routes/contactusRoutes.js';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/contact',contactusRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});