import { z } from 'zod';

import { AdGroupAdServiceButtonText } from './AdGroupAdServiceButtonText';
import { AdGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';

export const AdGroupAdServiceDynamicDisplayAd = z.object({
  brandColor: z.string().nullable(),
  buttonText: AdGroupAdServiceButtonText,
  campaignBannerMediaId: z.number().int().nullable(),
  campaignBannerMediaId2: z.number().int().nullable(),
  campaignBannerMediaId3: z.number().int().nullable(),
  campaignBannerMediaId4: z.number().int().nullable(),
  campaignBannerUrl: z.string().nullable(),
  isRemoveCampaignBannerMediaId: AdGroupAdServiceIsRemoveFlg,
  isRemoveCampaignBannerMediaId2: AdGroupAdServiceIsRemoveFlg,
  isRemoveCampaignBannerMediaId3: AdGroupAdServiceIsRemoveFlg,
  isRemoveCampaignBannerMediaId4: AdGroupAdServiceIsRemoveFlg,
  isRemoveCampaignBannerUrl: AdGroupAdServiceIsRemoveFlg,
  logoMediaId: z.number().int().nullable(),
  logoMediaId2: z.number().int().nullable(),
  logoMediaId3: z.number().int().nullable(),
  prefix: z.string().nullable(),
  principal: z.string().nullable(),
  suffix: z.string().nullable(),
  isRemovePrefix: AdGroupAdServiceIsRemoveFlg,
  isRemoveSuffix: AdGroupAdServiceIsRemoveFlg,
  isRemoveBrandColor: AdGroupAdServiceIsRemoveFlg
}).nullable();

export type AdGroupAdServiceDynamicDisplayAd = z.infer<typeof AdGroupAdServiceDynamicDisplayAd>;
