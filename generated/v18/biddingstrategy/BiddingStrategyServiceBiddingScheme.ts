import { z } from 'zod';

import { biddingStrategyServiceType } from './BiddingStrategyServiceType';
import { biddingStrategyServiceCpcBiddingScheme } from './BiddingStrategyServiceCpcBiddingScheme';
import { biddingStrategyServiceMaximizeConversionsBiddingScheme } from './BiddingStrategyServiceMaximizeConversionsBiddingScheme';
import { biddingStrategyServiceMaximizeGainingFriendsBiddingScheme } from './BiddingStrategyServiceMaximizeGainingFriendsBiddingScheme';
import { biddingStrategyServiceMaximizeConversionValueBiddingScheme } from './BiddingStrategyServiceMaximizeConversionValueBiddingScheme';

export const biddingStrategyServiceBiddingScheme = z.object({
  type: biddingStrategyServiceType,
  cpcBiddingScheme: biddingStrategyServiceCpcBiddingScheme,
  maximizeConversionsBiddingScheme: biddingStrategyServiceMaximizeConversionsBiddingScheme,
  maximizeGainingFriendsBiddingScheme: biddingStrategyServiceMaximizeGainingFriendsBiddingScheme,
  maximizeConversionValueBiddingScheme: biddingStrategyServiceMaximizeConversionValueBiddingScheme
}).nullable();

export type BiddingStrategyServiceBiddingScheme = z.infer<typeof biddingStrategyServiceBiddingScheme>;
