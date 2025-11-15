import { z } from 'zod';

export const StatsServiceTargetType = z.enum(["AD_SCHEDULE_TARGET", "GEO_TARGET", "AGE_TARGET", "GENDER_TARGET", "AUDIENCE_LIST_TARGET", "PLACEMENT_TARGET", "DEVICE_TARGET", "CONTENTS_TARGET", "UNKNOWN"]).nullable();

export type StatsServiceTargetType = z.infer<typeof StatsServiceTargetType>;
