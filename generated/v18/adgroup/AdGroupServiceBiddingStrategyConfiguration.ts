import { z } from 'zod';

import { AdGroupServiceBiddingScheme } from './AdGroupServiceBiddingScheme';

export const AdGroupServiceBiddingStrategyConfiguration = z.object({
  biddingScheme: AdGroupServiceBiddingScheme
}).nullable();

export type AdGroupServiceBiddingStrategyConfiguration = z.infer<typeof AdGroupServiceBiddingStrategyConfiguration>;
