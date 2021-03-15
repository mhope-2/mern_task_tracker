const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    text: {type: String, required: true},
    day: {type: String, required:true},
    reminder: {type: Boolean, required: false},
},
{timestamps:true})


module.exports = mongoose.model('Task',TaskSchema);