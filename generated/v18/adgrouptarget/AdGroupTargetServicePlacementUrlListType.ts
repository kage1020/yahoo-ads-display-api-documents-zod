import { z } from 'zod';

export const AdGroupTargetServicePlacementUrlListType = z.enum(["STANDARD_LIST", "EXCLUSIONS_ONLY_LIST", "UNKNOWN"]).nullable();

export type AdGroupTargetServicePlacementUrlListType = z.infer<typeof AdGroupTargetServicePlacementUrlListType>;
