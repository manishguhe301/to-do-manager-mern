const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const TaskModel = mongoose.model('todos', TaskSchema);
module.exports = TaskModel;