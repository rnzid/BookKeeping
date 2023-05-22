const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect');
const usersRoute= require('./routes/usersRoute');

const app = express();
const error = require('./middlewares/errorMiddlewareHandler')

//connect DB
dbConnect()
// user-Ranjit pw-J6wNDYQU75huyi4k

//passing body bata
app.use(express.json());


//Routes
app.use('/api/users',usersRoute);

//Error Middleware
app.use(error.errorMiddlewareHandler)

//login
app.post('/api/users/login',(req, res)=>{
    res.send('login Route')
});

//Update
app.put('/api/users/update',(req, res)=>{
    res.send('update Route')
});

//Delete
app.delete('/api/users/:id',(req, res)=>{
    res.send('Delete Route')
});


//fetch Users
app.get('/api/users',(req,res)=>{
    res.send('fetch Users')
})


//server
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`server is up ${PORT}`);
} )