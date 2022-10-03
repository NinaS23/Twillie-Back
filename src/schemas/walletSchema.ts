import joi from "joi";

export const walletDataInputSchema = joi.object({
  description: joi.string().required(),
  fixedEntry: joi.number() ,  
  variableEntry: joi.number(),
  fixedOutput: joi.number() ,
  variableOutput: joi.number(),
  
})