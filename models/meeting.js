const mongoose = require('mongoose');

const geoSchema = new mongoose.Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: [Number],
    index: "2dsphere"
}); 

const meetingSchema = mongoose.Schema({
    _id = mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        min: Date.now(),
        required: true,
    },
    describtion: {
        type: String,
    },
    progress:{
        type: Number,
        min: 0,
        max: 100
    },
    comments: 
        [String],
    typeOfExam:{
        type: String,
    },
    geometry: geoSchema,
}, {timestamps: true})

module.exports = mongoose.model("Meeting", meetingSchema);