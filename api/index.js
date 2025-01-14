const express = require("express");
var indexRouter = require('../routes/index');
const app = express();

app.use('/', indexRouter);

app.listen(5000, () => console.log("Server ready on port 3000."));

module.exports = app;