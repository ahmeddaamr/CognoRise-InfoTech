const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: String,
    checked:{
        type:Boolean,
        default:false
    }
})

const todoModel = mongoose.model("Todo List",todoSchema)
module.exports = todoModel
