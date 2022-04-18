var express = require('express');
var router = express.Router();
const path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/healthcheck', function(req, res, next) {
  res.send("ok")
});
router.get('/mobi', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../html/mobi.html'))
});
router.get('/button', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../html/button.html"))
});
router.post('/button', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../html/button.html"))
});
router.get('/.well-known/apple-app-site-association', function(req, res, next) {
  let content = require("../public/apple-app-site-association.json")
  res.setHeader('content-type', 'text/plain');
  res.json(content)
});
module.exports = router;
