import { z } from 'zod';

import { adGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';

export const adGroupAdServiceCarousel = z.object({
  displayOrder: z.number().int().nullable(),
  mediaId: z.number().int().nullable(),
  headline: z.string().nullable(),
  description: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  finalUrl: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  isRemoveSmartphoneFinalUrl: adGroupAdServiceIsRemoveFlg
}).nullable();

export type AdGroupAdServiceCarousel = z.infer<typeof adGroupAdServiceCarousel>;
