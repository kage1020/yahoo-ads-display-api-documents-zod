import { z } from 'zod';

import { estimatedUserSizeServiceUnavailableUrl } from './EstimatedUserSizeServiceUnavailableUrl';

export const estimatedUserSizeServiceUrls = z.object({
  url: z.string().nullable(),
  unavailableUrl: estimatedUserSizeServiceUnavailableUrl
}).nullable();

export type EstimatedUserSizeServiceUrls = z.infer<typeof estimatedUserSizeServiceUrls>;
