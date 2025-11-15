import { z } from 'zod';

import { CampaignServiceBiddingStrategyType } from './CampaignServiceBiddingStrategyType';
import { CampaignServiceCpcBiddingScheme } from './CampaignServiceCpcBiddingScheme';
import { CampaignServiceCpvBiddingScheme } from './CampaignServiceCpvBiddingScheme';
import { CampaignServiceCpfBiddingScheme } from './CampaignServiceCpfBiddingScheme';
import { CampaignServiceVcpmBiddingScheme } from './CampaignServiceVcpmBiddingScheme';
import { CampaignServiceMaximizeConversionsBiddingScheme } from './CampaignServiceMaximizeConversionsBiddingScheme';
import { CampaignServiceMaximizeGainingFriendsBiddingScheme } from './CampaignServiceMaximizeGainingFriendsBiddingScheme';
import { CampaignServiceMaximizeConversionValueBiddingScheme } from './CampaignServiceMaximizeConversionValueBiddingScheme';

export const CampaignServiceBiddingScheme = z.object({
  biddingStrategyType: CampaignServiceBiddingStrategyType,
  cpcBiddingScheme: CampaignServiceCpcBiddingScheme,
  cpvBiddingScheme: CampaignServiceCpvBiddingScheme,
  cpfBiddingScheme: CampaignServiceCpfBiddingScheme,
  vcpmBiddingScheme: CampaignServiceVcpmBiddingScheme,
  maximizeConversionsBiddingScheme: CampaignServiceMaximizeConversionsBiddingScheme,
  maximizeGainingFriendsBiddingScheme: CampaignServiceMaximizeGainingFriendsBiddingScheme,
  maximizeConversionValueBiddingScheme: CampaignServiceMaximizeConversionValueBiddingScheme
}).nullable();

export type CampaignServiceBiddingScheme = z.infer<typeof CampaignServiceBiddingScheme>;
