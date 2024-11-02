import { z } from 'zod';

export const TweetsScalarFieldEnumSchema = z.enum(['id','content','userId','createdAt','updatedAt']);

export default TweetsScalarFieldEnumSchema;
