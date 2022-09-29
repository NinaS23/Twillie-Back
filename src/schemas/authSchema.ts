import joi from "joi";

export const singUpData = joi.object({
    name: joi.string().required(),
    email: joi.string().email().max(100).required(),
    password: joi.string().required(),
    picture: joi.string().pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).required()
})

export const singInData = joi.object({
    email: joi.string().email().max(100).required(),
    password: joi.string().required()
})