import { z } from 'zod';

import { offlineConversionServiceUploadSourceType } from './OfflineConversionServiceUploadSourceType';
import { offlineConversionServiceProcessStatus } from './OfflineConversionServiceProcessStatus';

export const offlineConversionFile = z.object({
  accountId: z.number().int().nullable(),
  uploadId: z.number().int().nullable(),
  uploadFileName: z.string().nullable(),
  uploadedDate: z.string().nullable(),
  uploadSourceType: offlineConversionServiceUploadSourceType,
  processStatus: offlineConversionServiceProcessStatus
}).nullable();

export type OfflineConversionFile = z.infer<typeof offlineConversionFile>;
