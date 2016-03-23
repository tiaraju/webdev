var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.send(collection);
});

router.post('/',function (req,res) {
	console.log("entrou");
	 var book = req.body;
	 collection.push(book);
	 res.status(200);
	 res.send({});
});

router.put('/:bookId',function (req,res) {
	 var book = req.body;
	 var bookId = req.params.bookId;
	 collection[bookId]=book;
});




var collection = [
{
	"id":0,
  	"title":"dom casmurro " ,
	"writers":["jose"],
	"description":" ",
	"picUrl":" ",
	"price":40,
	"comments":[]
},
{
	"id":1,
	"title":"o cortiço" ,
	"writers":["jose"],
	"description":" ",
	"picUrl":" ",
	"price":33,
	"comments":[]
},
{
	"id":2,
  	"title":"memoria postumas " ,
	"writers":["jose"],
	"description":" ",
	"picUrl":" ",
	"price":12,
	"comments":[]
},
{
	"id":3,
  	"title":" iracema" ,
	"writers":["jose"],
	"description":" ",
	"picUrl":" ",
	"price":10,
	"comments":[]
},
{
	"id":4,
  	"title":" biografia " ,
	"writers":["jose","joao"],
	"description":" ",
	"picUrl":" ",
	"price":10,
	"comments":[]
},
{
	"id":5,
  	"title":"auto ajuda " ,
	"writers":["jose","joao"],
	"description":" ",
	"picUrl":" ",
	"price":20,
	"comments":[]
},
{
	"id":6,
  	"title":"historia" ,
	"writers":["jose","joao"],
	"description":" ",
	"picUrl":" ",
	"price":10,
	"comments":[]
},
{
	"id":7,
  	"title":"matematica " ,
	"writers":["jose","joao"],
	"description":" ",
	"picUrl":" ",
	"price":10,
	"comments":[]
},
{
	"id":8,
  	"title":" python" ,
	"writers":["jose","joao"],
	"description":" ",
	"picUrl":" ",
	"price":10,
	"comments":[]
},
{
	"id":9,
  	"title":" javascript" ,
	"writers":["jose","joao"],
	"description":" ",
	"picUrl":" ",
	"price":22,
	"comments":[]
}];

module.exports = router;
