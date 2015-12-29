var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Vybe = mongoose.model('vybes');



/* GET home */
router.get('/', function(req, res) {
  Vybe.find(function(err, vybes){
    console.log(vybes);
    res.render(
      'home',
      {title : '', vybes : vybes, err:err}
    );
  });
});

/* POST form. */
router.post('/', function(req, res) {
  var currentDate = Math.floor(Date.now() /1000); //unix timestamp - moment().format('X');
  new Vybe(
    {
      amount : req.body.amount,
      timestamp : currentDate
    }
  )
  .save(function(err, vybe) {
    res.redirect('/');
  });
});

module.exports = router;
