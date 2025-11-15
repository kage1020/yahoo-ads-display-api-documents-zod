import { z } from 'zod';

import { adGroupServiceCampaignBiddingStrategyType } from './AdGroupServiceCampaignBiddingStrategyType';
import { adGroupServiceCpcBiddingScheme } from './AdGroupServiceCpcBiddingScheme';
import { adGroupServiceCpvBiddingScheme } from './AdGroupServiceCpvBiddingScheme';
import { adGroupServiceCpfBiddingScheme } from './AdGroupServiceCpfBiddingScheme';
import { adGroupServiceVcpmBiddingScheme } from './AdGroupServiceVcpmBiddingScheme';
import { adGroupServiceMaximizeConversionsBiddingScheme } from './AdGroupServiceMaximizeConversionsBiddingScheme';
import { adGroupServiceMaximizeGainingFriendsBiddingScheme } from './AdGroupServiceMaximizeGainingFriendsBiddingScheme';
import { adGroupServiceMaximizeConversionValueBiddingScheme } from './AdGroupServiceMaximizeConversionValueBiddingScheme';

export const adGroupServiceBiddingScheme = z.object({
  campaignBiddingStrategyType: adGroupServiceCampaignBiddingStrategyType,
  cpcBiddingScheme: adGroupServiceCpcBiddingScheme,
  cpvBiddingScheme: adGroupServiceCpvBiddingScheme,
  cpfBiddingScheme: adGroupServiceCpfBiddingScheme,
  vcpmBiddingScheme: adGroupServiceVcpmBiddingScheme,
  maximizeConversionsBiddingScheme: adGroupServiceMaximizeConversionsBiddingScheme,
  maximizeGainingFriendsBiddingScheme: adGroupServiceMaximizeGainingFriendsBiddingScheme,
  maximizeConversionValueBiddingScheme: adGroupServiceMaximizeConversionValueBiddingScheme
}).nullable();

export type AdGroupServiceBiddingScheme = z.infer<typeof adGroupServiceBiddingScheme>;
