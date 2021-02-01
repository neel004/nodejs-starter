require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove("6016d6a8c169d20744931d04").then((tasks)=>{
//     console.log(tasks)
//     return Task.countDocuments({completed : false})
// }).then((count)=>{
//     console.log("total unfinished tasks are %d ", count)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const del = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed : false})
    return {
        deleted : del,
        count
    }
}

deleteTaskAndCount("6016d830fb192c1be8f3fd16").then((obj)=>{
    console.log(obj)
}).catch((e)=>{
    console.log(e)
})