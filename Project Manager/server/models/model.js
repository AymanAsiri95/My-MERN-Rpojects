const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name must be at least 3 characters "
        ]
    },
    date: {
        type: Date,
        required: [
            true,
            "Date is required !"
        ]
    },

}, { timestamps: true });

module.exports.Project = mongoose.model('Project', ProjectSchema);