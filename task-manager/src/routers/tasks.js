const Task = require('../models/task')
const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/tasks', auth , async (req,res)=>{
    const task = new Task({
        ...req.body,
        owner : req.user._id
    })
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/tasks',auth , async (req,res)=>{
    try{
        //const task = await Task.find({owner : req.user._id}) OR
        await req.user.populate('tasks').execPopulate()
        res.send(req.user.tasks)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/tasks/:id',auth,async (req,res)=>{
    const _id = req.params.id
    try{

        const task = await Task.findOne({_id,owner:req.user._id})

        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.send(e)
    }
        
})
router.patch('/tasks/:id',auth , async (req,res)=>{
    const allowedUpdates = ['description', 'completed']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(405).send({Error : "Invalid Update Requested!"})
    }
    try{
        //const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new : true, runValidators:true})
        const task = await Task.findOne({_id : req.params.id, owner : req.user._id})
        if(!task){
            return res.status(404).send({Error : "Task not found!"})
        }
        updates.forEach((update)=>{task[update] = req.body[update]})
        await task.save()
        res.send({Success: task })
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id',auth,async (req,res) => {
    try{
        const task = await Task.findOneAndDelete({_id : req.params.id , owner : req.user._id})
        if(!task){
            return res.status(400).send({Error : "Task is Unavailable"})
        }
        res.send({Success : "Deleted!",
                DeletedTask : task})
    }catch(e){
        res.status(403).send({Error : "!Error detected!"})
    }
})



module.exports = router