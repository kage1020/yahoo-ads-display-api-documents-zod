import { z } from 'zod';

export const FeedFtpServiceActiveStatus = z.enum(["INACTIVE", "ACTIVE", "UNKNOWN"]).nullable();

export type FeedFtpServiceActiveStatus = z.infer<typeof FeedFtpServiceActiveStatus>;
