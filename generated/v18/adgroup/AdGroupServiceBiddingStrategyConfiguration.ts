import { z } from 'zod';

import { adGroupServiceBiddingScheme } from './AdGroupServiceBiddingScheme';

export const adGroupServiceBiddingStrategyConfiguration = z.object({
  biddingScheme: adGroupServiceBiddingScheme
}).nullable();

export type AdGroupServiceBiddingStrategyConfiguration = z.infer<typeof adGroupServiceBiddingStrategyConfiguration>;
