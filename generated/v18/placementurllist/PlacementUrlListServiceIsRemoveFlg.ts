import { z } from 'zod';

export const placementUrlListServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type PlacementUrlListServiceIsRemoveFlg = z.infer<typeof placementUrlListServiceIsRemoveFlg>;
