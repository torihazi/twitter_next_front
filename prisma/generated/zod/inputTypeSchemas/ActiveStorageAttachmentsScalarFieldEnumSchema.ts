import { z } from 'zod';

export const ActiveStorageAttachmentsScalarFieldEnumSchema = z.enum(['id','name','recordType','recordId','blobId','createdAt']);

export default ActiveStorageAttachmentsScalarFieldEnumSchema;
