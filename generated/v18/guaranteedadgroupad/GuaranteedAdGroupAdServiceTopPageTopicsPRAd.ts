import { z } from 'zod';

import { GuaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';
import { GuaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';

export const GuaranteedAdGroupAdServiceTopPageTopicsPRAd = z.object({
  customParameters: GuaranteedAdGroupAdServiceCustomParameters,
  displayUrl: z.string().nullable(),
  displayUrlLevel: GuaranteedAdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  headline: z.string().nullable(),
  principal: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceTopPageTopicsPRAd = z.infer<typeof GuaranteedAdGroupAdServiceTopPageTopicsPRAd>;
