import { z } from 'zod';

import { GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitch } from './GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitch';
import { GuaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';
import { GuaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';

export const GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd = z.object({
  adShrinkMainMediaId: z.number().int().nullable(),
  panels: z.array(GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitch).nullable(),
  finalUrl: z.string().nullable(),
  displayUrlLevel: GuaranteedAdGroupAdServiceDisplayUrlLevel,
  customParameters: GuaranteedAdGroupAdServiceCustomParameters,
  trackingUrl: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd = z.infer<typeof GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd>;
