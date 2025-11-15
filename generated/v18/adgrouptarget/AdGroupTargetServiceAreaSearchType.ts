import { z } from 'zod';

export const adGroupTargetServiceAreaSearchType = z.enum(["GEO", "RADIUS", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceAreaSearchType = z.infer<typeof adGroupTargetServiceAreaSearchType>;
