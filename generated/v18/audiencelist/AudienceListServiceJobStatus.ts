import { z } from 'zod';

export const AudienceListServiceJobStatus = z.enum(["RECEIVING", "RECEIVED", "INVALID_FILE", "FAILED", "UNKNOWN"]).nullable();

export type AudienceListServiceJobStatus = z.infer<typeof AudienceListServiceJobStatus>;
