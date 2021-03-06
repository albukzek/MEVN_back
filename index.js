const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const cors = require('cors')
const { routes } = require('./src/routes')

//подключение к БД
mongoose.connect(
    'mongodb://localhost:27017/mevnshop',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
//инициализация приложения
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

routes.forEach((item)=>{
    app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
})
  
//обьявить роутер 
const PORT = 3000
http.createServer({}, app).listen(PORT)
console.log(`Server rinning at ${PORT}`)