import { z } from 'zod';

export const adGroupTargetServiceSortField = z.enum(["AREA_SEARCH_TYPE", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceSortField = z.infer<typeof adGroupTargetServiceSortField>;
