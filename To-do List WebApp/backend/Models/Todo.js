const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: String
})

const todoModel = mongoose.model("Todo List",todoSchema)
module.exports = todoModel
