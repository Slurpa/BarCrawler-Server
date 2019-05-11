require('dotenv').config();
const Router = require('./router.js');

const Express    = require('express');
const App        = Express();
const BodyParser = require('body-parser');
const port       = process.env.PORT || 8080;
const router     = Express.Router();

App.use(BodyParser.urlencoded({ extended: false }))
App.use(BodyParser.json())
App.use('/api', Router.initRoutes(router));
App.listen(port);

console.log(`App running on localhost:${port}`);