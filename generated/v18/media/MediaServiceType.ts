import { z } from 'zod';

export const MediaServiceType = z.enum(["IMAGE", "ANIMATION_IMAGE", "UNKNOWN"]).nullable();

export type MediaServiceType = z.infer<typeof MediaServiceType>;
