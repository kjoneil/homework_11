var people = require('../data/friends');

module.exports = function (app) {
  app.get('/api/friends', function (req, res, next) {
    res.json(people)
  })
  app.post('/api/friends', function (req, res, next) {
    console.log(req.body)
    res.json(people)
  })
  
};