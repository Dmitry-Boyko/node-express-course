const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')



const getAllTasks = asyncWrapper( async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({tasks}) 
    // res.status(200).json({tasks, amount:tasks.length}) 
    // res.status(200).json({success:true, data:{tasks}}) 
  } catch (error) {
    res.status(500).json({msg:error})
  }
})

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const getTask = async (req, res) => {
  try{
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task) {
      return res.status(404).json({msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({task})
  } catch {
    res.status(500).json({msg:error})
  }
  
}

const updateTask = async (req, res) => {
  try{
    const {id:taskID} = req.params

    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, { new: true, runValidators: true})
    if(!task) {
      return res.status(404).json({msg: `No task with id: ${taskID}`})
    }

    req.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
  res.send('update task')
}

const deleteTask = async (req, res) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task) {
      return res.status(404).json({msg: `No task with id: ${taskID}`})
    }
    // res.status(200).send()
    // res.status(200).json({task: null, status: 'success'})
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}


module.exports = {
  getAllTasks, createTask, getTask, updateTask, deleteTask
}