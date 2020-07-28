var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup',function(req,res,next) {
	const {name,email}=req.body;

	res.render('signedup',{
		title:"Successfully sogned up!",
		name,
		email
	});
});

module.exports = router;
