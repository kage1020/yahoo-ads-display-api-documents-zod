import { z } from 'zod';

export const AdGroupTargetServiceDeliverType = z.enum(["INCLUDE", "EXCLUDE", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceDeliverType = z.infer<typeof AdGroupTargetServiceDeliverType>;
