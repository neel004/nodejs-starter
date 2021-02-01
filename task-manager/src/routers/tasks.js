const Task = require('../models/task')
const express = require('express')
const router = new express.Router()

router.post('/tasks',async (req,res)=>{
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/tasks',async (req,res)=>{
    try{
        const task = await Task.find({})
        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/tasks/:id',async (req,res)=>{
    const _id = req.params.id
    try{
        const task = await Task.findOne({_id})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.send(e)
    }
        
})
router.patch('/tasks/:id',async (req,res)=>{
    const allowedUpdates = ['description', 'completed']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(405).send({Error : "Invalid Update Requested!"})
    }
    try{
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new : true, runValidators:true})
        if(!task){
            return res.status(400).send({Error : "Task not found!"})
        }
        res.send({Success: task })
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id',async (req,res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(400).send({Error : "Task With give id is unavailable"})
        }
        res.send({Success : "Deleted!",
                DeletedTask : task})
    }catch(e){
        res.status(403).send({Error : "!Error detected!"})
    }
})



module.exports = router