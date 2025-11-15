import { z } from 'zod';

import { GuaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';
import { GuaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';

export const GuaranteedAdGroupAdServiceTalkHeadViewAd = z.object({
  customParameters: GuaranteedAdGroupAdServiceCustomParameters,
  displayUrl: z.string().nullable(),
  displayUrlLevel: GuaranteedAdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceTalkHeadViewAd = z.infer<typeof GuaranteedAdGroupAdServiceTalkHeadViewAd>;
