const express = require("express");
const app = express()
const port = 80

// Static Files
app.use(express.static('./src/public')) //for loading css
app.use("/css", express.static(__dirname + './src/public/css')) //making acessing the assets easy
app.use("/img", express.static(__dirname + './src/public/img'))
app.use("/js", express.static(__dirname + './src/public/js'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// Routes
const HomeRouter = require('./src/routes/Home.js')
app.use('/', HomeRouter)

// Listen On Port
app.listen(port, () => console.log("Listening To Port 80"))
