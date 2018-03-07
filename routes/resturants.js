const db = require("../models/Resturant");


module.exports = function(app) {
	app.get("/api/nhresturants", function(req, res) {
		new Nhresturant({
			name: 'The Fat Dog'
		}).save().then(function(data) {
            res.json(data);
            console.log(data);
        });
	});
};
