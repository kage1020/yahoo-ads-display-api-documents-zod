import { z } from 'zod';

export const placementUrlListServiceUrlActiveFlg = z.enum(["PAUSED", "ACTIVE", "UNKNOWN"]).nullable();

export type PlacementUrlListServiceUrlActiveFlg = z.infer<typeof placementUrlListServiceUrlActiveFlg>;
