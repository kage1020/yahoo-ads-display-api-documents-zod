import { z } from 'zod';

export const adGroupTargetServiceDeliverType = z.enum(["INCLUDE", "EXCLUDE", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceDeliverType = z.infer<typeof adGroupTargetServiceDeliverType>;
