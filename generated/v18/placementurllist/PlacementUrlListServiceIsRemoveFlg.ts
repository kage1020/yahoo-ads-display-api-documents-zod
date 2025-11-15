import { z } from 'zod';

export const PlacementUrlListServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type PlacementUrlListServiceIsRemoveFlg = z.infer<typeof PlacementUrlListServiceIsRemoveFlg>;
