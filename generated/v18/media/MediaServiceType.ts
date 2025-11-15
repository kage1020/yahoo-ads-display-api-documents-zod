import { z } from 'zod';

export const mediaServiceType = z.enum(["IMAGE", "ANIMATION_IMAGE", "UNKNOWN"]).nullable();

export type MediaServiceType = z.infer<typeof mediaServiceType>;
