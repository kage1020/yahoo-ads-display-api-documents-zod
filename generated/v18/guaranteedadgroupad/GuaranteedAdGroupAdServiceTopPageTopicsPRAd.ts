import { z } from 'zod';

import { guaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';
import { guaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';

export const guaranteedAdGroupAdServiceTopPageTopicsPRAd = z.object({
  customParameters: guaranteedAdGroupAdServiceCustomParameters,
  displayUrl: z.string().nullable(),
  displayUrlLevel: guaranteedAdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  headline: z.string().nullable(),
  principal: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceTopPageTopicsPRAd = z.infer<typeof guaranteedAdGroupAdServiceTopPageTopicsPRAd>;
