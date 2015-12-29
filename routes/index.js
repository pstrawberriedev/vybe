var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Vybe = mongoose.model('vybes');
var moment = require('moment');

var currentDate = moment().format('YYYYMMDDhhmm');
var relativeDate = moment(currentDate, "YYYYMMDDhhmm").fromNow();


/* GET home */
router.get('/', function(req, res) {
  Vybe.find(function(err, vybes){
    console.log(vybes)
    res.render(
      'home',
      {title : '', vybes : vybes}
    );
  });
});

/* POST form. */
router.post('/', function(req, res) {
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
