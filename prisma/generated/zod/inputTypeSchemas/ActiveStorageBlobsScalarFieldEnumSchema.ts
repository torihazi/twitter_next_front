import { z } from 'zod';

export const ActiveStorageBlobsScalarFieldEnumSchema = z.enum(['id','key','filename','contentType','metadata','serviceName','byteSize','checksum','createdAt']);

export default ActiveStorageBlobsScalarFieldEnumSchema;
