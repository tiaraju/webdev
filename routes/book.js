'use strict';
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Book = require('../model/book.js');

router.get('/',function (req,res) {
	var error = {};
	var result = {};
	Book.find({},function (err,books) {
		if(err){
			res.contentType('application/json');
            res.status(404);
            error.code = err.code;
            error.message = err.message;
		}else{
			result.data = books;
            res.contentType('application/json');
			res.status(200);
		}
        res.send(JSON.stringify({"result":result, "error":error}));
	});
});


router.get('/:bookId',function (req,res) {
	var error = {};
	var result = {};
	var bookId = req.params.bookId;
	Book.findOne({_id:bookId},function (err,book) {
		if(err){
			res.contentType('application/json');
            res.status(404);
            error.code = err.code;
            error.message = err.message;
		}else{
			result.data = book;
            res.contentType('application/json');
			res.status(200);
		}
        res.send(JSON.stringify({"result":result, "error":error}));
	}); 
});


router.post('/',function (req,res) {
	var error = {};
	var result = {};
	var book = new Book(req.body);

	book.save(function (err){
		if (err) {
			error.code = err.code;
			error.message = err.message;
      		//11000: duplicated key
      		error.code == 11000 ? res.status(409) : err.code;
            res.contentType('application/json');
			res.status(error.code);
      	}else{
			result.data = book;
            res.contentType('application/json');
		    res.status(201);	
		}
		res.send(JSON.stringify({"result": result, "error": error}));
	});
});


router.put('/:bookId',function (req,res) {
	var error = {};
	var result = {};
	var book = req.params.bookId;
	var newBook = new Book(req.body).toObject();
	delete newBook._id;

	Book.update({_id:book},newBook,{},function (err,book){
		 if(err){
		 	error.code=err.code;
		 	error.message=err.message;
		 	res.contentType('application/json');
		 	res.status(500);
		 }else{
		 	newBook._id=book._id;
		 	result.data=newBook;
		 	res.contentType('application/json');
			res.status(200);
		 }
 		 res.send(JSON.stringify({"result": result, "error": error}));
	});
});

module.exports = router;