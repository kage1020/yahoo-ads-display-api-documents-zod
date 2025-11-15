import { z } from 'zod';

import { AdGroupServiceCampaignBiddingStrategyType } from './AdGroupServiceCampaignBiddingStrategyType';
import { AdGroupServiceCpcBiddingScheme } from './AdGroupServiceCpcBiddingScheme';
import { AdGroupServiceCpvBiddingScheme } from './AdGroupServiceCpvBiddingScheme';
import { AdGroupServiceCpfBiddingScheme } from './AdGroupServiceCpfBiddingScheme';
import { AdGroupServiceVcpmBiddingScheme } from './AdGroupServiceVcpmBiddingScheme';
import { AdGroupServiceMaximizeConversionsBiddingScheme } from './AdGroupServiceMaximizeConversionsBiddingScheme';
import { AdGroupServiceMaximizeGainingFriendsBiddingScheme } from './AdGroupServiceMaximizeGainingFriendsBiddingScheme';
import { AdGroupServiceMaximizeConversionValueBiddingScheme } from './AdGroupServiceMaximizeConversionValueBiddingScheme';

export const AdGroupServiceBiddingScheme = z.object({
  campaignBiddingStrategyType: AdGroupServiceCampaignBiddingStrategyType,
  cpcBiddingScheme: AdGroupServiceCpcBiddingScheme,
  cpvBiddingScheme: AdGroupServiceCpvBiddingScheme,
  cpfBiddingScheme: AdGroupServiceCpfBiddingScheme,
  vcpmBiddingScheme: AdGroupServiceVcpmBiddingScheme,
  maximizeConversionsBiddingScheme: AdGroupServiceMaximizeConversionsBiddingScheme,
  maximizeGainingFriendsBiddingScheme: AdGroupServiceMaximizeGainingFriendsBiddingScheme,
  maximizeConversionValueBiddingScheme: AdGroupServiceMaximizeConversionValueBiddingScheme
}).nullable();

export type AdGroupServiceBiddingScheme = z.infer<typeof AdGroupServiceBiddingScheme>;
