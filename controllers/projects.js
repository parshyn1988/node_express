const Project = require('../models/project');

exports.getProjects = async (req, res) => {
    const projects = Project.getAll();
    res.render('projects', { pageTitle: 'Our Projects', projects });
};

exports.addProject = async (req, res) => {
    const project = new Project(req.body.title, req.body.image);
    project.save();
    res.redirect('/projects');
}
