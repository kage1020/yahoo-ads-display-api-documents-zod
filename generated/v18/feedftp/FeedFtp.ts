import { z } from 'zod';

import { FeedFtpServiceActiveStatus } from './FeedFtpServiceActiveStatus';
import { FeedFtpServiceItemListUploadType } from './FeedFtpServiceItemListUploadType';
import { FeedFtpServiceSchedule } from './FeedFtpServiceSchedule';

export const FeedFtp = z.object({
  accountId: z.number().int().nullable(),
  activeStatus: FeedFtpServiceActiveStatus,
  feedId: z.number().int().nullable(),
  feedUrl: z.string().nullable(),
  itemListUploadType: FeedFtpServiceItemListUploadType,
  schedule: FeedFtpServiceSchedule,
  userName: z.string().nullable(),
  userPassword: z.string().nullable()
}).nullable();

export type FeedFtp = z.infer<typeof FeedFtp>;
