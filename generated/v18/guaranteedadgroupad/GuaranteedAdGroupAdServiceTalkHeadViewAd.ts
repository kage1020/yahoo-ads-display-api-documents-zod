import { z } from 'zod';

import { guaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';
import { guaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';

export const guaranteedAdGroupAdServiceTalkHeadViewAd = z.object({
  customParameters: guaranteedAdGroupAdServiceCustomParameters,
  displayUrl: z.string().nullable(),
  displayUrlLevel: guaranteedAdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceTalkHeadViewAd = z.infer<typeof guaranteedAdGroupAdServiceTalkHeadViewAd>;
