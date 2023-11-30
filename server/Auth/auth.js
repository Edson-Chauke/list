const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 9000;

// Connect to MongoDB (replace 'your-database-url' with your actual MongoDB URL)
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Task schema
const Task = mongoose.model('Task', {
  description: String,
});

// Middleware
app.use(bodyParser.json());

// Routes

// Create - Add to a list
app.post('/add', async (req, res) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: 'Bad request - missing description in the request body' });
  }

  try {
    const newTask = new Task({ description });
    await newTask.save();
    res.json({ message: 'Task added successfully', task: newTask });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// Read - Retrieve the list
app.get('/list', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// Update - Update the items in the list
app.put('/update/:id', async (req, res) => {
  const taskId = req.params.id;
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: 'Bad request - missing description in the request body' });
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId, { description }, { new: true });

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task updated successfully', task: updatedTask });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// Delete - Delete from the list
app.delete('/delete/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully', task: deletedTask });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// Search - Search for an Item from the List
app.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Bad request - missing query parameter' });
  }

  try {
    const matchingTasks = await Task.find({ description: { $regex: query, $options: 'i' } });

    res.json({ matchingTasks });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
