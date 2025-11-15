import { z } from 'zod';

import { campaignServiceBiddingStrategyType } from './CampaignServiceBiddingStrategyType';
import { campaignServiceCpcBiddingScheme } from './CampaignServiceCpcBiddingScheme';
import { campaignServiceCpvBiddingScheme } from './CampaignServiceCpvBiddingScheme';
import { campaignServiceCpfBiddingScheme } from './CampaignServiceCpfBiddingScheme';
import { campaignServiceVcpmBiddingScheme } from './CampaignServiceVcpmBiddingScheme';
import { campaignServiceMaximizeConversionsBiddingScheme } from './CampaignServiceMaximizeConversionsBiddingScheme';
import { campaignServiceMaximizeGainingFriendsBiddingScheme } from './CampaignServiceMaximizeGainingFriendsBiddingScheme';
import { campaignServiceMaximizeConversionValueBiddingScheme } from './CampaignServiceMaximizeConversionValueBiddingScheme';

export const campaignServiceBiddingScheme = z.object({
  biddingStrategyType: campaignServiceBiddingStrategyType,
  cpcBiddingScheme: campaignServiceCpcBiddingScheme,
  cpvBiddingScheme: campaignServiceCpvBiddingScheme,
  cpfBiddingScheme: campaignServiceCpfBiddingScheme,
  vcpmBiddingScheme: campaignServiceVcpmBiddingScheme,
  maximizeConversionsBiddingScheme: campaignServiceMaximizeConversionsBiddingScheme,
  maximizeGainingFriendsBiddingScheme: campaignServiceMaximizeGainingFriendsBiddingScheme,
  maximizeConversionValueBiddingScheme: campaignServiceMaximizeConversionValueBiddingScheme
}).nullable();

export type CampaignServiceBiddingScheme = z.infer<typeof campaignServiceBiddingScheme>;
