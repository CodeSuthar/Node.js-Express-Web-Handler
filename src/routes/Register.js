const express = require('express')
const RegisterRouter = express.Router()

RegisterRouter.get('', async(req,res) => {
  res.render('register.ejs')
})

module.exports = RegisterRouter