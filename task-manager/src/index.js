const express = require('express')
const userRouter = require('../src/routers/users')
const taskRouter = require('../src/routers/tasks')
require('./db/mongoose')
const app = express()
const port = process.env.PORT || 3000



//without express middleware req->route handler
//with express middleware req->do something=>route handler

// // app.use((req,res,next)=>{
// //     if(req.method === "GET"){
// //         res.send("Get Requests are disabled")
// //     }else{
// //         next()
// //     }
    
// // })
// app.use((req,res,next)=>{
//     const maintainance = true
//     if(maintainance){
//         res.status(503).send("Servers are in maintainance , Check back soon")
//     }
//     else{
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log("server is up on port %d",port)
})

// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () =>{
//     // const task = await Task.findById('601992061807822090b67d1b')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('6019911750884128f4eac479')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()