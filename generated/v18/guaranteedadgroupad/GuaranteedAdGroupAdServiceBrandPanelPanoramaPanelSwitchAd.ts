import { z } from 'zod';

import { GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitch } from './GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitch';
import { GuaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';
import { GuaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';

export const GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd = z.object({
  adShrinkMainMediaId: z.number().int().nullable(),
  panels: z.array(GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitch).nullable(),
  finalUrl: z.string().nullable(),
  displayUrlLevel: GuaranteedAdGroupAdServiceDisplayUrlLevel,
  customParameters: GuaranteedAdGroupAdServiceCustomParameters,
  trackingUrl: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd = z.infer<typeof GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd>;
