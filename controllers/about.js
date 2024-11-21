const Employee = require('../models/employee');

exports.getAbout = async (req, res) => {
    const employees = Employee.getAll();
    res.render('about', { pageTitle: 'About us', employees });
};

exports.addEmployee = async (req, res) => {
    const employee = new Employee(req.body.name, req.body.role, req.body.image, req.body.description);
    employee.save();
    res.redirect('/about');
}
