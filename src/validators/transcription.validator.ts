import Joi from 'joi';

export const transcriptionSchema = Joi.object({
  audioUrl: Joi.string()
    .uri({ scheme: [/https?/] })   
    .required()
    .max(1000)
    .messages({
      'string.empty': '"audioUrl" cannot be empty',
      'any.required': '"audioUrl" is required',
      'string.uri': '"audioUrl" must be a valid URL starting with http or https',
      'string.max': '"audioUrl" should not exceed {#limit} characters'
    })
});