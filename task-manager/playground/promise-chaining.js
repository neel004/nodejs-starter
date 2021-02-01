require('../src/db/mongoose')
const User = require('../src/models/user')
//6016baaa0d6e2814504cdbeb
// User.findByIdAndUpdate("601591edac72e6280c4cd9e6",{age : 14}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age : 14})
// }).then((result)=>{
//     console.log(result)
// })

const updataAgeAndCount = async (id, age)=>{
    const user = await User.findByIdAndUpdate(id,{ age })
    const count = await User.countDocuments({ age })
    const obj = {count , user}
    return obj
}


updataAgeAndCount("601591edac72e6280c4cd9e6",22).then((obj)=>{
    console.log(obj)
}).catch((e)=>{
    console.log(e)
})