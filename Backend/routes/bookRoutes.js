const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Book = require("../models/Book");

const bookRouter = express.Router();

//create book
bookRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const book = await Book.create(req.body);
    if (book) {
      res.status (200);
      res.json(book);
    } else {
      res.status(500);
      throw new Error("Book Creating fail");
    }
  })
);

//Get book
bookRouter.get(
    "/",
    expressAsyncHandler(async (req, res) => {
      const book = await Book.find({});
      if (book) {
        res.status (200);
        res.json(book);
      } else {
        res.status(500);
        throw new Error("There is no book");
      }
    })
  );
  

  bookRouter.put('/:id', expressAsyncHandler(async(req,res)=>{
    const book = await Book.findById(req.params.id);
    if(book){
        const UpdatedBook = await Book.findByIdAndUpdate(req.params.id,req.body ,{
            new:true,
            runValidators: true,
        });
        res.status(200);
        res.json(UpdatedBook)
    }else{
        res.status(500);
        throw new Error("Updated fail");
    }
  }))

  bookRouter.delete('/:id',expressAsyncHandler(async(req,res)=>{
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      //console.log("here");
      res.send(book);
      res.status(200);
    }catch(error){
      res.json(error)
    }
  }))

module.exports = bookRouter;
