const express = require('express')
const Joi = require('joi')
const { validateRegister } = require('../handler/validator')
const routers = express.Router()

routers.get('/', (req, res) => {
  res.send('Hello man!')
})

routers.post('/v1/register', (req, res) => {
  // Handle the request here
  const { error, value } = validateRegister(req.body)

  if (error) {
    console.log(error)
    return res.send(error.details)
  }

  console.log(req.body)
  res.send('Data received')
})

routers.post('/v1/login', (req, res) => {
  // Handle the request here
  console.log(req.body)
  res.send('Data received')
})

module.exports = routers
