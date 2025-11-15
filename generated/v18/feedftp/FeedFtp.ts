import { z } from 'zod';

import { feedFtpServiceActiveStatus } from './FeedFtpServiceActiveStatus';
import { feedFtpServiceItemListUploadType } from './FeedFtpServiceItemListUploadType';
import { feedFtpServiceSchedule } from './FeedFtpServiceSchedule';

export const feedFtp = z.object({
  accountId: z.number().int().nullable(),
  activeStatus: feedFtpServiceActiveStatus,
  feedId: z.number().int().nullable(),
  feedUrl: z.string().nullable(),
  itemListUploadType: feedFtpServiceItemListUploadType,
  schedule: feedFtpServiceSchedule,
  userName: z.string().nullable(),
  userPassword: z.string().nullable()
}).nullable();

export type FeedFtp = z.infer<typeof feedFtp>;
