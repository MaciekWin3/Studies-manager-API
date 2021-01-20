const mongoose = require('mongoose');

const geoSchema = new mongoose.Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates:{
        type:[Number],
        index: "2dsphere"
    } 
    
}); 

const meetingSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    projectId: {
        type: mongoose.Types.ObjectId,
    },
    date: {
        type: Date,
        min: Date.now(),
        required: true,
    },
    describtion: {
        type: String,
    },
    geometry: geoSchema,
}, {timestamps: true})

const Meeting = mongoose.model("Meeting", meetingSchema);
module.exports = Meeting;