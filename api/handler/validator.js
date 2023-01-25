const Joi = require('joi')

const validator = (schema) => (payload) =>
  schema.validate(payload, {
    aboutEarly: false,
  })

const registerSchema = Joi.object({
  user_name: Joi.string().alphanum().min(3).max(30).required(),
  user_email: Joi.string().email().required(),
  password: Joi.string().min(3).max(10).required(),
  is_admin: Joi.boolean().required(),
})

exports.validateRegister = validator(registerSchema)
