import { z } from 'zod';

import { adGroupAdServiceButtonText } from './AdGroupAdServiceButtonText';
import { adGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';

export const adGroupAdServiceDynamicDisplayAd = z.object({
  brandColor: z.string().nullable(),
  buttonText: adGroupAdServiceButtonText,
  campaignBannerMediaId: z.number().int().nullable(),
  campaignBannerMediaId2: z.number().int().nullable(),
  campaignBannerMediaId3: z.number().int().nullable(),
  campaignBannerMediaId4: z.number().int().nullable(),
  campaignBannerUrl: z.string().nullable(),
  isRemoveCampaignBannerMediaId: adGroupAdServiceIsRemoveFlg,
  isRemoveCampaignBannerMediaId2: adGroupAdServiceIsRemoveFlg,
  isRemoveCampaignBannerMediaId3: adGroupAdServiceIsRemoveFlg,
  isRemoveCampaignBannerMediaId4: adGroupAdServiceIsRemoveFlg,
  isRemoveCampaignBannerUrl: adGroupAdServiceIsRemoveFlg,
  logoMediaId: z.number().int().nullable(),
  logoMediaId2: z.number().int().nullable(),
  logoMediaId3: z.number().int().nullable(),
  prefix: z.string().nullable(),
  principal: z.string().nullable(),
  suffix: z.string().nullable(),
  isRemovePrefix: adGroupAdServiceIsRemoveFlg,
  isRemoveSuffix: adGroupAdServiceIsRemoveFlg,
  isRemoveBrandColor: adGroupAdServiceIsRemoveFlg
}).nullable();

export type AdGroupAdServiceDynamicDisplayAd = z.infer<typeof adGroupAdServiceDynamicDisplayAd>;
