import { z } from 'zod';

export const estimatedUserSizeServiceUnavailableUrl = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type EstimatedUserSizeServiceUnavailableUrl = z.infer<typeof estimatedUserSizeServiceUnavailableUrl>;
