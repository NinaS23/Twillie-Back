import joi from "joi";
import DateExtension from '@joi/date';

const Joi = joi.extend(DateExtension);

export const walletDataInputSchema = joi.object({
  fixedEntry: joi.number() ,  
  variableEntry: joi.number(),
  fixedOutput: joi.number() ,
  variableOutput: joi.number(),
  createdAt:Joi.date().format("YYYY-MM-DD")
})
