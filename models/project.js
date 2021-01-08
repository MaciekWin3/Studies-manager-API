const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
        unique: true,
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

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;