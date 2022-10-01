import joi from "joi";
import DateExtension from '@joi/date';

const Joi = joi.extend(DateExtension);

export const walletDataInputSchema = joi.object({
  description: joi.string().required(),
  fixedEntry: joi.number() ,  
  variableEntry: joi.number(),
  fixedOutput: joi.number() ,
  variableOutput: joi.number(),
  created_at:Joi.date().format("YYYY-MM-DD")
})
