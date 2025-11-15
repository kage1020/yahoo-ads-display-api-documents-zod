import { z } from 'zod';

export const adGroupTargetServiceGender = z.enum(["ST_MALE", "ST_FEMALE", "ST_UNKNOWN", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceGender = z.infer<typeof adGroupTargetServiceGender>;
