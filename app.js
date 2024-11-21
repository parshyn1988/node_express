const express = require('express');
const bodyParser = require('body-parser');
const projectsRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');
const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');
const notFoundRoutes = require('./routes/404');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(projectsRoutes);
app.use(aboutRoutes);
app.use(adminRoutes);
app.use(homeRoutes);
app.use(notFoundRoutes);

app.listen(3000);
