import { z } from 'zod';

import { ConversionGroupServiceConversion } from './ConversionGroupServiceConversion';

export const ConversionGroup = z.object({
  accountId: z.number().int().nullable(),
  conversionGroupId: z.number().int().nullable(),
  conversionGroupName: z.string().nullable(),
  conversions: z.array(ConversionGroupServiceConversion).nullable()
}).nullable();

export type ConversionGroup = z.infer<typeof ConversionGroup>;
