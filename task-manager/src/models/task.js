const mongoose = require('mongoose')


const Task = mongoose.model("Task",{
    description : {
        type : String,
        trim : true,
        required : true
    },
    completed :{
        type : Boolean,
        default : false,
        optional : true
    }
})

module.exports = Task