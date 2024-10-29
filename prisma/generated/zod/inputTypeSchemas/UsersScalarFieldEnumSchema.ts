import { z } from 'zod';

export const UsersScalarFieldEnumSchema = z.enum(['id','email','encryptedPassword','name','profile','place','web','birth','resetPasswordToken','resetPasswordSentAt','rememberCreatedAt','confirmationToken','confirmedAt','confirmationSentAt','unconfirmedEmail','createdAt','updatedAt','jti']);

export default UsersScalarFieldEnumSchema;
