const request = require('request')

const getWeather = (address,callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(address)+'&appid={apiKey}&units=metric'
    request({ url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect to weather servers',undefined)
        }
        else if(body.cod!=200){
            //console.log(body.cod)
            callback('Unable to find location. Try another search',undefined)
        }
        else{
            callback(undefined,{
                temperature : body.main.temp,
                humidity : body.main.humidity,
                latitude : body.coord.lat,
                longitude : body.coord.lon
            })
        }
    })
}

module.exports = {
    getWeather
}