const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

// home page fucntions 
app.get('/', function(req, res){
    res.render('index')
})


app.get('/about', function(req, res){
    res.render('about')
})




app.listen(3000, function(){
    console.log("Server is listening.....")
}) 