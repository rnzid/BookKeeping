const express = require("express");
const usersRoute = express.Router();
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

//UserRoutes
//Register
usersRoute.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      throw new Error("User exists");
    }
    const userCreated = await User.create({ name, email, password });
    res.json({
      _id: userCreated.id,
      name: userCreated.name,
      password: userCreated.password,
      email: userCreated.email,
      token: generateToken(userCreated._id),
    });
  })
);

/* async (req, res)=>{
    try {
        
        //console.log(req.body);
        const {name, email, password} = req.body;
        const user = await User.create({name, email, password});
        console.log(user);
        res.send(user);
        
    }catch(error){
        res.send(error);
    }

} */

//login
usersRoute.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.isPasswordMatch(password))) {
      //set statuscode
      res.status(200);
      res.json({
        _id: user.id,
        name: user.name,
        password: user.password,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("invalid Credentials");
    }
  })
);

//Update
usersRoute.put("/update", (req, res) => {
  res.send("update Route");
});

//Delete
usersRoute.delete("/:id", (req, res) => {
  res.send("Delete Route");
});

//fetch Users
usersRoute.get("/", (req, res) => {
  res.send("fetch Users");
});

module.exports = usersRoute;
