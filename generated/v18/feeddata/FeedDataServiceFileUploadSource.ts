import { z } from 'zod';

export const feedDataServiceFileUploadSource = z.enum(["CAMPAIGN_MANAGEMENT_TOOL", "API", "FTP_SCHEDULE", "FTP_DIRECT", "UNKNOWN"]).nullable();

export type FeedDataServiceFileUploadSource = z.infer<typeof feedDataServiceFileUploadSource>;
