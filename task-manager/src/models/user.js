const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User',{
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true ,
        trim : true,
        lowercase : true,
        validate(email){
            if(!validator.isEmail(email)){
                throw new Error("Email is invalid!")
            }
        }
    },
    password:{
        type : String,
        required : true,
        minLength : 6,
        trim:true,
        validate(password){
            if(password.toLowerCase().includes("password")){
                throw new Error("!!Password cant be the\"password\" it self!! ")
            }
        }

    },
    age : {
        type : Number,
        validate(age) {
            if(age < 0){
                throw new Error("Age must be positive number")
            }
        },
        default: 12
    }
})

module.exports = User
