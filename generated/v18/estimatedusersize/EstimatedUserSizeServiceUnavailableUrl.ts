import { z } from 'zod';

export const EstimatedUserSizeServiceUnavailableUrl = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type EstimatedUserSizeServiceUnavailableUrl = z.infer<typeof EstimatedUserSizeServiceUnavailableUrl>;
