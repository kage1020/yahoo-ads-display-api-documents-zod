import { z } from 'zod';

import { EstimatedUserSizeServiceUnavailableUrl } from './EstimatedUserSizeServiceUnavailableUrl';

export const EstimatedUserSizeServiceUrls = z.object({
  url: z.string().nullable(),
  unavailableUrl: EstimatedUserSizeServiceUnavailableUrl
}).nullable();

export type EstimatedUserSizeServiceUrls = z.infer<typeof EstimatedUserSizeServiceUrls>;
