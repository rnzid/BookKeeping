const express = require('express');
require('dotenv').config();
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


//login
app.post('/api/users/login',usersRoute);

//Update
app.put('/api/users/update',usersRoute);

//Delete
app.delete('/api/users/:id',usersRoute);


//fetch Users
app.get('/api/users',usersRoute)


 //console.log(process.env.JWT_SECRET_KEY);
//Error Middleware
app.use(error.errorMiddlewareHandler)

//server

app.listen(process.env.PORT,(data,err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`starting...${process.env.PORT}`);
    }
   });
/* const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`server is up ${PORT}`);
} ) */