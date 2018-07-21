// const Utils = require('../utils');
const express = require("express");
const router = express.Router();
const RestaurantModel = require('../models/Restaurant.js');

// Display list of all Users.
exports.list = function(req, res) {
    res.send('NOT IMPLEMENTED: Restaurant list');
};

// Create this restaurant in the database.
exports.create = router.post('/', function(req, res) {
    const { name, address, phone, days, startTime, endTime } = req.body;
    const restModel = new RestaurantModel({ name, address, phone, days, startTime, endTime });

    restModel.save((err) => {
        if (err) {
            res.status(400).json({
                code: 400,
                message: 'An error as occured',
                data: err,
            });
        } else {
            function handleSuccess (data, res) {
                res.status(200).json({
                    code: 200,
                    message: 'Operation successful =D',
                    data,
                });
            };
        }
    })
})

