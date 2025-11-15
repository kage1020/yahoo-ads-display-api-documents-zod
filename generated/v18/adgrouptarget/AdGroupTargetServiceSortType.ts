import { z } from 'zod';

export const adGroupTargetServiceSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceSortType = z.infer<typeof adGroupTargetServiceSortType>;
