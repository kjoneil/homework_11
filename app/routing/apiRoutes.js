var friends = require("../data/people");

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });
      
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
      });
}