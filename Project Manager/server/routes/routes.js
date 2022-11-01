const controller = require('../controllers/controller');

module.exports = function (app) {
    app.get('/', controller.allProject);
    app.post('/new', controller.createProject);
    app.delete('/delete/:id', controller.deleteProject);
}