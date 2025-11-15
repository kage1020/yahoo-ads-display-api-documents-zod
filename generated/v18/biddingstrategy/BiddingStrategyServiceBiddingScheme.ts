import { z } from 'zod';

import { BiddingStrategyServiceType } from './BiddingStrategyServiceType';
import { BiddingStrategyServiceCpcBiddingScheme } from './BiddingStrategyServiceCpcBiddingScheme';
import { BiddingStrategyServiceMaximizeConversionsBiddingScheme } from './BiddingStrategyServiceMaximizeConversionsBiddingScheme';
import { BiddingStrategyServiceMaximizeGainingFriendsBiddingScheme } from './BiddingStrategyServiceMaximizeGainingFriendsBiddingScheme';
import { BiddingStrategyServiceMaximizeConversionValueBiddingScheme } from './BiddingStrategyServiceMaximizeConversionValueBiddingScheme';

export const BiddingStrategyServiceBiddingScheme = z.object({
  type: BiddingStrategyServiceType,
  cpcBiddingScheme: BiddingStrategyServiceCpcBiddingScheme,
  maximizeConversionsBiddingScheme: BiddingStrategyServiceMaximizeConversionsBiddingScheme,
  maximizeGainingFriendsBiddingScheme: BiddingStrategyServiceMaximizeGainingFriendsBiddingScheme,
  maximizeConversionValueBiddingScheme: BiddingStrategyServiceMaximizeConversionValueBiddingScheme
}).nullable();

export type BiddingStrategyServiceBiddingScheme = z.infer<typeof BiddingStrategyServiceBiddingScheme>;
