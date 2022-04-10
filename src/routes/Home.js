const express = require('express')
const HomeRouter = express.Router()

HomeRouter.get('', async(req,res) => {
  res.render('home.ejs')
})

module.exports = HomeRouter