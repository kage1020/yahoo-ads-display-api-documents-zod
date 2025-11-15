import { z } from 'zod';

import { guaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitch } from './GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitch';
import { guaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';
import { guaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';

export const guaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd = z.object({
  adShrinkMainMediaId: z.number().int().nullable(),
  panels: z.array(guaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitch).nullable(),
  finalUrl: z.string().nullable(),
  displayUrlLevel: guaranteedAdGroupAdServiceDisplayUrlLevel,
  customParameters: guaranteedAdGroupAdServiceCustomParameters,
  trackingUrl: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd = z.infer<typeof guaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd>;
