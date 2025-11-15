import { z } from 'zod';

import { VideoServiceExtraSpecsQualityType } from './VideoServiceExtraSpecsQualityType';

export const VideoServiceExtraSpecs = z.object({
  qualityType: VideoServiceExtraSpecsQualityType
}).nullable();

export type VideoServiceExtraSpecs = z.infer<typeof VideoServiceExtraSpecs>;
