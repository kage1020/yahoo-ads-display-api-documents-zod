import { z } from 'zod';

import { guaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitch } from './GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitch';
import { guaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';
import { guaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';

export const guaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd = z.object({
  adShrinkMainMediaId: z.number().int().nullable(),
  panels: z.array(guaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitch).nullable(),
  finalUrl: z.string().nullable(),
  displayUrlLevel: guaranteedAdGroupAdServiceDisplayUrlLevel,
  customParameters: guaranteedAdGroupAdServiceCustomParameters,
  trackingUrl: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd = z.infer<typeof guaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd>;
