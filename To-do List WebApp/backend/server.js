const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())
//port number
const PORT = 3001;

//connecting to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/Test')

//Create
app.post('/add',(req,res) => {
    const task = req.body.task;
    todoModel.create({
        task: task
    }).then(result=>res.json(res))
    .catch(err=>res.json(err))
})
//Read
app.get('/get',(req,res)=>{
    todoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
// Update
app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { updatedTask } = req.body;

    todoModel.findByIdAndUpdate(id, { task: updatedTask })//, { new: true })
        .then(result => {
            res.status(200).json({ message: "Task updated successfully ", task: result });
        })
        .catch(err => {
            console.error("An error occurred while updating the task " ,err);
            res.status(500).json({ message: "An error occurred while updating the task", error: err });
        });
});

//Delete
app.delete('/delete/:id',(req,res) => {
    const {id} = req.params;
    todoModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})


//connecting server
app.listen(PORT,()=>{
    console.log(`Server running on : http://localhost:${PORT}`)
})