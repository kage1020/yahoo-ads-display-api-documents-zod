import { z } from 'zod';

export const AdGroupTargetServiceGender = z.enum(["ST_MALE", "ST_FEMALE", "ST_UNKNOWN", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceGender = z.infer<typeof AdGroupTargetServiceGender>;
