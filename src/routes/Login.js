const express = require('express')
const LoginRouter = express.Router()

LoginRouter.get('', async(req,res) => {
  res.render('login.ejs')
})

module.exports = LoginRouter