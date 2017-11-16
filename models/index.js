var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.Promise = Promise;

mongoose.connect('mongodb://todo:todo@ds035593.mlab.com:35593/todoapp');



module.exports.Todo = require("./todo");