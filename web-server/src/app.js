const path = require('path')
const hbs = require('hbs')
const express = require('express')

const app = express()

// Define paths for express config
const public_dir_path = path.join(__dirname,'../public') //pointing to public content
const viewsPath = path.join(__dirname,'../templets/views') //custom views path
const partialsPath = path.join(__dirname,'../templets/partials')

//setup static dir. to serve
app.use(express.static(public_dir_path))

//setup handlebar engin and views location 
app.set('views' , viewsPath)
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)


app.get('',(req,res)=>{
    res.render('index',{
        title : 'Weather',
        name : ' Neel Patel'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'About Me',
        name : ' Neel Patel'
    })
})

app.get('/help' , (req,res)=>{
    res.render('help',{
        title : 'Help',
        name : ' Neel Patel'
    })
})
app.get('/weather',(req,res)=>{
    res.send([{
        longitude :1,
        latitude :1,
        temperature : 0.13
    }])
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title : '404',
        name : 'Neel Patel',
        error : 'Help Article not found'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title : '404',
        name : 'Neel Patel',
        error : 'Page Not found'
    })
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})