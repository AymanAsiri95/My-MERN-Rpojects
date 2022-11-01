const { Project } = require('../models/model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProject = (request, response) => {
    Project.create(request.body)
        .then(Project => response.json(Project))
        .catch(err => response.status(400).json(err))
}

module.exports.allProject = (request, response) => {
    Project.find({})
        .then(Projects => response.json(Projects))
        .catch(err => response.json(err))
}

module.exports.getProject = (request, response) => {
    Project.findOne({ _id: request.params.id })
        .then(Project => response.json(Project))
        .catch(err => response.json(err))
}

module.exports.updateProject = (request, response) => {
    Project.findOneAndUpdate({ _id: request.params.id }, request.body, { runValidators: true })
        .then(updatedProject => response.json(updatedProject))
        .catch(err => response.status(400).json(err));
}

module.exports.deleteProject = (request, response) => {
    Project.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}