const express = require('express');
const usersRoute = express.Router();
const User= require('../models/User');

//UserRoutes
//Register
usersRoute.post('/register',async (req, res)=>{
    try {
        
        //console.log(req.body);
        const {name, email, password} = req.body;
        const user = await User.create({name, email, password});
        console.log(user);
        res.send(user);
        
    }catch(error){
        console.log(error);
    }

});


//login
usersRoute.post('/login',(req, res)=>{
    res.send('login Route')
});

//Update
usersRoute.put('/update',(req, res)=>{
    res.send('update Route')
});


//Delete
usersRoute.delete('/:id',(req, res)=>{
    res.send('Delete Route')
});

//fetch Users
usersRoute.get('/',(req,res)=>{
    res.send('fetch Users')
})



module.exports= usersRoute;
