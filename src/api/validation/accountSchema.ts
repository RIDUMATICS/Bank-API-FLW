import * as joi from 'joi';
import { AccountType } from '../../interfaces';

const requiredStr = joi.string().trim().required();

export const createAccountSchema = joi
  .object({
    accountHolderName: requiredStr,
    accountHolderDOB: requiredStr.regex(/^\d{2}-\d{2}-\d{4}$/).messages({
      'string.pattern.base':
        'accountHolderDOB must be in the format "MM-DD-YYYY".',
      'any.required': 'accountHolderDOB is required.',
    }),
    accountType: requiredStr.valid(...Object.values(AccountType)),
    initialBalance: joi.number().positive().required(),
  })
  .unknown();

export const AccountIDSchema = joi
  .string()
  .trim()
  .regex(/^\d{10}$/)
  .required()
  .messages({
    'string.base': 'AccountID must be a string',
    'string.pattern.base': 'AccountID must be exactly 10 numbers',
    'any.required': 'AccountID is required',
  });
