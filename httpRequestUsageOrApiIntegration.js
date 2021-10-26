
// In this file i have demonstrated how we can use data from external apis in our node js application

// Note : we are using postman-request module because the request module of npm has been depracted
const request = require('postman-request')
const myApiAcessKey = 'Put your api access key here'
const url = `http://api.weatherstack.com/current?access_key=${myApiAcessKey}&query=Mathura`
// like query and access key in above url there are other paramaters also available at this api for knowing about them please visit weatherstack website


// This request function is used when we want to get data from an api in node js application

request({ url:url , json:true }, (error,response) => {              // json:true means we want data should be delivered to us in json format  so that we don't need to do external parsing
    //response.body returns the whole Data present at api

    // for getting understanding about why i used location.timezone_id after response.body please visit the url given above
    // here location is a key and inside this key timezone_id is another key
    console.log(response.body.location.timezone_id)
})