import { z } from 'zod';

export const FeedServiceSourceType = z.enum(["FTP_SCHEDULE", "FTP_DIRECT", "API", "FTP_AND_API", "CAMPAIGN_MANAGEMENT_TOOL", "UNKNOWN"]).nullable();

export type FeedServiceSourceType = z.infer<typeof FeedServiceSourceType>;
