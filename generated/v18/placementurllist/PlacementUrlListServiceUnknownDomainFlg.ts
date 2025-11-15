import { z } from 'zod';

export const PlacementUrlListServiceUnknownDomainFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type PlacementUrlListServiceUnknownDomainFlg = z.infer<typeof PlacementUrlListServiceUnknownDomainFlg>;
