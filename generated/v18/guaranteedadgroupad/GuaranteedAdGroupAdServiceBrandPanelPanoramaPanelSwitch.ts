import { z } from 'zod';

export const GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitch = z.object({
  displayOrder: z.number().int().nullable(),
  finalUrl: z.string().nullable(),
  mediaId: z.number().int().nullable(),
  switchMediaId: z.number().int().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitch = z.infer<typeof GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitch>;
