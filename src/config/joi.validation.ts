import * as joi from 'joi'

export const configValidationSchema = joi.object({
    NODE_ENV: joi.string().valid('dev', 'prod', 'test').default('dev'),
    PORT: joi.number().default(3000),
    MONGODB_URL: joi.string().required(),
    DEFAULT_LIMIT: joi.number().default(6),
})