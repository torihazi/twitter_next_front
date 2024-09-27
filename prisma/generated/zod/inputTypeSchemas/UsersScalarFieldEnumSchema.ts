import { z } from 'zod';

export const UsersScalarFieldEnumSchema = z.enum(['id','email','encrypted_password','name','profile','place','web','birth','reset_password_token','reset_password_sent_at','remember_created_at','confirmation_token','confirmed_at','confirmation_sent_at','unconfirmed_email','created_at','updated_at','jti']);

export default UsersScalarFieldEnumSchema;
