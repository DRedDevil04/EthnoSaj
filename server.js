// Importing Packages
import express, { json } from "express";
import { config } from "dotenv";
import morgan from 'morgan';
import connectDB  from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import addressRoutes from './routes/addressRoutes.js';
import cors from 'cors';
// Environment Configuration
config();

// DataBase Config
connectDB();

// REST Object
const app=express();

// Middlewares
app.use(json());
app.use(morgan('dev'));
app.use(express.json());

// Routes

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1',categoryRoutes);
app.use('/api/v1/products/',productRoutes);
app.use('/api/v1/addresses/',addressRoutes);
app.use('/api/v1/orders/',orderRoutes);


// REST API
app.get("/",(req,res)=>
{
    console.log("Get Request handled");
    res.send("<h1>HELLLOOO FROM THE OTHER SIDE</h1>");
});

// PORT
const PORT=process.env.PORT || 8080;

// LISTEN
app.listen(PORT,()=>{
    console.log("IN LISTEN");
});
