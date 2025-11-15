import { z } from 'zod';

export const videoServiceExtraSpecsQualityType = z.enum(["FULLHD", "HD", "UNKNOWN"]).nullable();

export type VideoServiceExtraSpecsQualityType = z.infer<typeof videoServiceExtraSpecsQualityType>;
