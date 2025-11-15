import { z } from 'zod';

export const VideoServiceQualityType = z.enum(["FULLHD", "HD", "HIGH", "MIDDLE", "LOW", "ORIGINAL", "UNKNOWN"]);

export type VideoServiceQualityType = z.infer<typeof VideoServiceQualityType>;
