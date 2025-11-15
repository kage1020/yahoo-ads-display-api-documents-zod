import { z } from 'zod';

export const AdGroupTargetServiceSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceSortType = z.infer<typeof AdGroupTargetServiceSortType>;
