import { z } from 'zod';

export const guaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitch = z.object({
  displayOrder: z.number().int().nullable(),
  finalUrl: z.string().nullable(),
  mediaId: z.number().int().nullable(),
  switchMediaId: z.number().int().nullable(),
  adLeftSideMediaId: z.number().int().nullable(),
  adRightSideMediaId: z.number().int().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitch = z.infer<typeof guaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitch>;
