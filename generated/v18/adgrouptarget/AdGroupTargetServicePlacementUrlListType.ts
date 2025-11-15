import { z } from 'zod';

export const adGroupTargetServicePlacementUrlListType = z.enum(["STANDARD_LIST", "EXCLUSIONS_ONLY_LIST", "UNKNOWN"]).nullable();

export type AdGroupTargetServicePlacementUrlListType = z.infer<typeof adGroupTargetServicePlacementUrlListType>;
