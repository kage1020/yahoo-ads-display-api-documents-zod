import { z } from 'zod';

import { adGroupAdServiceMediaAsset } from './AdGroupAdServiceMediaAsset';
import { adGroupAdServiceHeadlineAsset } from './AdGroupAdServiceHeadlineAsset';
import { adGroupAdServiceDescriptionAsset } from './AdGroupAdServiceDescriptionAsset';

export const adGroupAdServiceAsset = z.object({
  mediaAssets: z.array(adGroupAdServiceMediaAsset).nullable(),
  headlineAssets: z.array(adGroupAdServiceHeadlineAsset).nullable(),
  descriptionAssets: z.array(adGroupAdServiceDescriptionAsset).nullable()
}).nullable();

export type AdGroupAdServiceAsset = z.infer<typeof adGroupAdServiceAsset>;
