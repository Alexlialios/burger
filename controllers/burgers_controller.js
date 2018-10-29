var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();
router.get('/', function(req,res) {
	res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
	burger.selectAll('events', function(data){
		var hbsObject = {burgers : data}
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req,res) {
	console.log(req.body.burger_name);
	burger.insertOne('events', req.body.burger_name, req.body.devoured, function(data){
		res.redirect('/burgers')
	});
});

router.put('/burgers/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne('events', {'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;