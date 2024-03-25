const Joi = require('joi');

const SigninSchema = Joi.object({
    owner: Joi.string()
        .min(2)
        .max(60)
        .required(),
    password: Joi.string()
        .min(6)
        .max(10)
        .required()
});

module.exports = {
    SigninSchema,
};