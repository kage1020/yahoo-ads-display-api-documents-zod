import { z } from 'zod';

import { AdGroupAdServiceMediaAsset } from './AdGroupAdServiceMediaAsset';
import { AdGroupAdServiceHeadlineAsset } from './AdGroupAdServiceHeadlineAsset';
import { AdGroupAdServiceDescriptionAsset } from './AdGroupAdServiceDescriptionAsset';

export const AdGroupAdServiceAsset = z.object({
  mediaAssets: z.array(AdGroupAdServiceMediaAsset).nullable(),
  headlineAssets: z.array(AdGroupAdServiceHeadlineAsset).nullable(),
  descriptionAssets: z.array(AdGroupAdServiceDescriptionAsset).nullable()
}).nullable();

export type AdGroupAdServiceAsset = z.infer<typeof AdGroupAdServiceAsset>;
