import { z } from 'zod';

export const videoServiceQualityType = z.enum(["FULLHD", "HD", "HIGH", "MIDDLE", "LOW", "ORIGINAL", "UNKNOWN"]);

export type VideoServiceQualityType = z.infer<typeof videoServiceQualityType>;
