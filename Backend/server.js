const express = require('express');
const mongoose = require('mongoose')

const app = express();


//connect DB
mongoose.connect('mongodb+srv://Ranjit:J6wNDYQU75huyi4k@cluster0.qdyia3u.mongodb.net/book-keeping-app').then(()=>console.log("Db connected")).catch(err=>console.log(err));

// user-Ranjit pw-J6wNDYQU75huyi4k

//Routes
//UserRoutes
app.post('/api/users/register',(req, res)=>{
    res.send('Register Route')
});

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