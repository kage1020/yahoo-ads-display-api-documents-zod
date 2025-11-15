import { z } from 'zod';

export const AdGroupTargetServiceAreaSearchType = z.enum(["GEO", "RADIUS", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceAreaSearchType = z.infer<typeof AdGroupTargetServiceAreaSearchType>;
