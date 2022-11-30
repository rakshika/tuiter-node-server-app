// const express = require('express')
import express from 'express';
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js"

import mongoose from "mongoose";
// mongoose.connect('mongodb://localhost:27017/tuiter');
//mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://127.0.0.1:27017/tuiter'
// const CONNECTION_STRING = 'mongodb+srv://rakshikaMongo:M0ngo123@cluster0.aceqomv.mongodb.net/tuiter?retryWrites=true&w=majority'
//                           || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);
// mongoose.connect('mongodb+srv://rakshikaMongo:M0ngo123@cluster0.aceqomv.mongodb.net/tuiter?retryWrites=true&w=majority');

const app = express()
app.use(cors())
app.use(express.json());

HelloController(app)
UserController(app)
TuitsController(app)
app.listen(4000);
// app.listen(process.env.PORT || 4000);



// app.get('/hello', () => {console.log("Hello World!")})
// app.get('/hello', (req, res) => {res.send("Hello World!")})
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})