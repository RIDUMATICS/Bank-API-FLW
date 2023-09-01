import { ObjectSchema } from 'joi';
import { createAccountSchema } from './accountSchema';

export default {
  createAccount: createAccountSchema,
} as { [key: string]: ObjectSchema };