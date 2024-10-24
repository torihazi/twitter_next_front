import { z } from 'zod';

export const TweetsScalarFieldEnumSchema = z.enum(['id','content','user_id','created_at','updated_at']);

export default TweetsScalarFieldEnumSchema;
