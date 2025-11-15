import { z } from 'zod';

export const feedFtpServiceActiveStatus = z.enum(["INACTIVE", "ACTIVE", "UNKNOWN"]).nullable();

export type FeedFtpServiceActiveStatus = z.infer<typeof feedFtpServiceActiveStatus>;
