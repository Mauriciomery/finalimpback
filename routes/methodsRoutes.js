const {Router} = require('express')
const route = Router()
const controller = require('../controller/app.controller')

route.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    next()
});

//Routes
route.get('/fibonacci',controller.getFibonacci)
route.get('/factorial',controller.getFactorial)
route.get('/triangulo',controller.getAPTriangulo)
route.get('/circulo',controller.getAPCirculo)
route.get('/rectangulo',controller.getAPRectangulo)

module.exports=route