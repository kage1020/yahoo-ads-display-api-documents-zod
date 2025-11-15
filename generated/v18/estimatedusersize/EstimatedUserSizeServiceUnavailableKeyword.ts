import { z } from 'zod';

export const EstimatedUserSizeServiceUnavailableKeyword = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type EstimatedUserSizeServiceUnavailableKeyword = z.infer<typeof EstimatedUserSizeServiceUnavailableKeyword>;
