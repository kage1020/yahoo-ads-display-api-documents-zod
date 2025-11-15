import { z } from 'zod';

import { videoServiceExtraSpecsQualityType } from './VideoServiceExtraSpecsQualityType';

export const videoServiceExtraSpecs = z.object({
  qualityType: videoServiceExtraSpecsQualityType
}).nullable();

export type VideoServiceExtraSpecs = z.infer<typeof videoServiceExtraSpecs>;
