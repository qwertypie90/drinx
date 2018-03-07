const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;
const resturantSchema = new Schema ({
	name: String,
	address: String,
	number: Number,
	Monday: String,
	Tuesday: String,
	Wednesday: String,
	Thursday: String,
	Friday: String,
	Saturday: String,
	Sunday: String
});

Nhresturant = mongoose.model('nhResturants', resturantSchema);

module.exports = Nhresturant; 