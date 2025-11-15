import { z } from 'zod';

export const VideoServiceExtraSpecsQualityType = z.enum(["FULLHD", "HD", "UNKNOWN"]).nullable();

export type VideoServiceExtraSpecsQualityType = z.infer<typeof VideoServiceExtraSpecsQualityType>;
