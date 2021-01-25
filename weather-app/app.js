const request = require('request')
// const chalk = require('chalk')
const getWeather = require('./utils/getWeather')
const getAddress = require('./utils/getAddress') 

// const success = chalk.green
// const value = chalk.bgRed
// const err = chalk.redBright

// request({ url : api_url, json : true }, (error , response) => {
//     if(error){
//         console.log(err('Error connecting Weather servers!'))
//     } else if(response.body.error) {
//         console.log(err('Unable to find location'))
//     } else{
//     console.log(success(value(response.body.weather[0].description) + ' throughout the day and ' +'it is '+value(response.body.main.temp) + ' celcius temperature in Ahmedabad, there is '+value(response.body.main.humidity) + '% humidity in air.')) 
//     }
// })

const location = process.argv[2]
if(!location){
    console.log('Please Enter Address')
}else{
    
    getWeather.getWeather(location,(error,{latitude,longitude})=>{
        console.log(error)
        console.log(latitude + ' ' + longitude)
        getAddress.getAddress(latitude,longitude,(error, {latitude,longitude,city,description,temperature,code})=>{
            console.log(error)
            console.log(description)
        })
    
    })   
}