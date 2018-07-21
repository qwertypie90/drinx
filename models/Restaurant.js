const mongoose = require('mongoose');

const RestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    address: {
        type: String,
        required: [true, 'Address is required.'],
    },
    phone: {
        type: Number,
        required: [true, 'Phone is required.'],
    },
    days: {
        type: Array,
        required: [true, 'Days are required.'],
    },
    startTime: {
        type: String,
        required: [true, 'Start time is required.'],
    },
    endTime: {
        type: String,
        required: [true, 'End time is required.'],
    },
}, { timestamps: true });


module.exports = mongoose.model('Restaurant', RestSchema);

// name: {
//     type: String,
//     required: [true, 'Name is required.'],
//   },
//     address: {
//     type: String,
//     required: [true, 'Address is required.'],
//   },
//     phone: {
//     type: Number,
//     required: [true, 'Phone is required.'],
//   },
//     days: {
//     type: Array,
//     required: [true, 'Days are required.'],
//   },
//     startTime: {
//     type: String,
//     required: [true, 'Start time is required.'],
//   },
//     endTime: {
//     type: String,
//     required: [true, 'End time is required.'],
//   }, }, { timestamps: true });