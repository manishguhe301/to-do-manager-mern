const TaskModel = require('../Models/TaskMode');

const createTask = async (req, res) => {
  const data = req.body;
  try {
    const task = new TaskModel(data);
    await task.save();
    res.status(201).json({
      message: 'Task created successfully',
      task,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error creating task',
      error: err.message,
      success: false,
    });
  }
};

const fetchAllTasks = async (req, res) => {
  try {
    const data = await TaskModel.find({});
    res.status(200).json({
      message: 'Tasks fetched successfully',
      data: data,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching tasks',
      error: err.message,
      success: false,
    });
  }
};

const updateTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const obj = { $set: { ...body } };
    const data = await TaskModel.findByIdAndUpdate(id, obj);
    res.status(200).json({
      message: 'Task updated successfully',
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error updating task',
      error: err.message,
      success: false,
    });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await TaskModel.findByIdAndDelete(id);
    res.status(200).json({
      message: 'Tasks is deleted successfully',
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error deleting task',
      error: err.message,
      success: false,
    });
  }
};

module.exports = {
  createTask,
  fetchAllTasks,
  deleteTaskById,
  updateTaskById,
};
