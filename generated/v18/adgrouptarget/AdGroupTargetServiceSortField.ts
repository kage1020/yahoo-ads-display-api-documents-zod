import { z } from 'zod';

export const AdGroupTargetServiceSortField = z.enum(["AREA_SEARCH_TYPE", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceSortField = z.infer<typeof AdGroupTargetServiceSortField>;
