// const resturantController = require("../controllers/nhresturantsController");
// const db = require("../models/Resturant");

module.exports = function(app) {
    app.get("/api/nhresturants", function(req, res) {
        Nhresturant.find({}, function(error, found) {
            // Log any errors
            if (error) {
                console.log(error);
            }
            // Otherwise, send json of the notes back to user
            // This will fire off the success function of the ajax request
            else {
                res.json(found);
            }
        });
    });
    app.get("/api/nhresturants/:day", function(req, res) {
        var choice = req.params.day;
        console.log(choice);
        Nhresturant.find({ [choice] : {$ne:"N/A"}}, function(error, found) {
            // Log any errors
            if (error) {
                console.log(error);
            }
            // Otherwise, send json of the notes back to user
            // This will fire off the success function of the ajax request
            else {
                res.json(found);
            }
        });
    });
    app.post("/api/nhresturants", function(req, res) {
         Nhresturant.create(req.body, function(error, found) {
            // Log any errors
            if (error) {
                console.log(error);
            }
            // Otherwise, send json of the notes back to user
            // This will fire off the success function of the ajax request
            else {
                res.json(found);
                console.log(req.body);
            }
        });
    });
};