import { z } from 'zod';

export const AudienceListServiceVideoViewRule = z.enum(["START", "PLAYED_TO_25", "PLAYED_TO_50", "PLAYED_TO_75", "PLAYED_TO_95", "COMPLETE", "PLAYED_TO_3_SEC", "PLAYED_TO_10_SEC", "UNKNOWN"]).nullable();

export type AudienceListServiceVideoViewRule = z.infer<typeof AudienceListServiceVideoViewRule>;
