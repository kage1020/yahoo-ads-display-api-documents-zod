import { z } from 'zod';

export const placementUrlListServiceUnknownDomainFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type PlacementUrlListServiceUnknownDomainFlg = z.infer<typeof placementUrlListServiceUnknownDomainFlg>;
