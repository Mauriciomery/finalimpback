const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extend:true}))
app.use(bodyparser.json())
app.use(cors({origin:true}))
app.set('port',5000)

//Declarando una ruta para el manejo de la API
app.use('/api/',require('./routes/methods.route'))


//start server
app.listen(process.env.PORT || 5000,()=>{
    console.log('Listen in the port ',process.env.PORT || 5000)
})

module.exports = app