const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    _id = mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        min: Date.now()
    },
    describtion: {
        type: String,
    },
    progress:{
        type: Number,
        min: 0,
        max: 100
    },
    comments: [String],
    coworkers: [String],
}, {timestamps: true})

module.exports = mongoose.model("Class", classSchema);