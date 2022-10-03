import joi from "joi";

export const walletDataInputSchema = joi.object({
  description: joi.string().required(),
  value: joi.number().required(),
  type: joi.string().valid("entradaFixa", "entradaVariavel", "saidaFixa", "saidaVariavel").required()
})
