import { z } from 'zod';

export const statsServiceType = z.enum(["CAMPAIGN", "ADGROUP", "AD", "IMAGE", "VIDEO", "TARGET", "UNKNOWN"]).nullable();

export type StatsServiceType = z.infer<typeof statsServiceType>;
