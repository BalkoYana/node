const Joi = require('joi');

const ApartmentCreateSchema = Joi.object({
    district: Joi.string()
        .min(2)
        .max(60)
        .required(),
    aver: Joi.number()
    ,

    floor: Joi.number()
        .min(1)
        .max(131)
        .required(),

    area: Joi.number()
        .min(13)
        .max(1630)
        .required(),

    rooms: Joi.number()
        .min(1)
        .max(25)
        .required(),
    owner: Joi.string()
        .min(2)
        .max(60)
        .required(),
    price: Joi.number()
        .min(10000)
        .required(),
    password: Joi.string()
        .required()
        .min(6)
        .max(10),
});
const ApartmentUpdateSchema = Joi.object({
    district: Joi.string()
        .min(2)
        .max(60),
    aver: Joi.number()
    ,

    floor: Joi.number()
        .min(1)
        .max(131),

    area: Joi.number()
        .min(13)
        .max(1630),

    rooms: Joi.number()
        .min(1)
        .max(25),
    owner: Joi.string()
        .min(2)
        .max(60),
    price: Joi.number()
        .min(10000),
    password: Joi.string()
        .required()
        .min(6)
        .max(10),
});
module.exports = {
    ApartmentCreateSchema,
    ApartmentUpdateSchema
};
