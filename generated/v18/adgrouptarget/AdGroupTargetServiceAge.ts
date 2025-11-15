import { z } from 'zod';

export const adGroupTargetServiceAge = z.enum(["GT_RANGE18_19", "GT_RANGE20_24", "GT_RANGE25_29", "GT_RANGE30_34", "GT_RANGE35_39", "GT_RANGE40_44", "GT_RANGE45_49", "GT_RANGE50_54", "GT_RANGE55_59", "GT_RANGE60_64", "GT_RANGE65_69", "GT_RANGE70_UL2", "GT_UNKNOWN2", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceAge = z.infer<typeof adGroupTargetServiceAge>;
