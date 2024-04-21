const Joi = require('joi');

module.exports = {
    create: Joi.object().keys({
        disease: Joi.string().required(),
        latitude: Joi.string().required(),
        longitude: Joi.string().required(),
        city: Joi.string().required()
    }),
    get: Joi.object().keys({
        id: Joi.string()
    }),
    all: Joi.object().keys({
        
    }),
    remove: Joi.object().keys({
        id: Joi.string().required()
    }),
    update: Joi.object().keys({
        id: Joi.string().required(),
        disease: Joi.string().required(),
        latitude: Joi.string().required(),
        longitude: Joi.string().required(),
        city: Joi.string().required()
    })
};

