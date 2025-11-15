import { z } from 'zod';

export const PlacementUrlListServiceUrlActiveFlg = z.enum(["PAUSED", "ACTIVE", "UNKNOWN"]).nullable();

export type PlacementUrlListServiceUrlActiveFlg = z.infer<typeof PlacementUrlListServiceUrlActiveFlg>;
