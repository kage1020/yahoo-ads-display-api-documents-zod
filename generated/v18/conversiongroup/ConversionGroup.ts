import { z } from 'zod';

import { conversionGroupServiceConversion } from './ConversionGroupServiceConversion';

export const conversionGroup = z.object({
  accountId: z.number().int().nullable(),
  conversionGroupId: z.number().int().nullable(),
  conversionGroupName: z.string().nullable(),
  conversions: z.array(conversionGroupServiceConversion).nullable()
}).nullable();

export type ConversionGroup = z.infer<typeof conversionGroup>;
