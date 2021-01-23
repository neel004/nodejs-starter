const path = require('path')
const express = require('express')

const app = express()

// Define paths for express config
const public_dir_path = path.join(__dirname,'../public') //pointing to public content
const viewsPath = path.join(__dirname,'../views') //custom views path
//setup static dir. to serve
app.use(express.static(public_dir_path))
//setup handlebar engin and views location 
app.set('views' , viewsPath)
app.set('view engine','hbs')


app.get('',(req,res)=>{
    res.render('index',{
        title : 'Weather',
        name : 'Neel'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'About Me',
        name : 'Neel'
    })
})

app.get('/help' , (req,res)=>{
    res.render('help',{
        title : 'Help',
        email : '18it092@charusat.edu.in'
    })
})
app.get('/weather',(req,res)=>{
    res.send([{
        longitude :1,
        latitude :1,
        temperature : 0.13
    }])
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})