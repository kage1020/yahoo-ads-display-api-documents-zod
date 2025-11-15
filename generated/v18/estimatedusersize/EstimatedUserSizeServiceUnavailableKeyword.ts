import { z } from 'zod';

export const estimatedUserSizeServiceUnavailableKeyword = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type EstimatedUserSizeServiceUnavailableKeyword = z.infer<typeof estimatedUserSizeServiceUnavailableKeyword>;
