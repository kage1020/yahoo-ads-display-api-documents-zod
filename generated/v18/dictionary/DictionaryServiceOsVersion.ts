import { z } from 'zod';

import { DictionaryServiceDeviceOsType } from './DictionaryServiceDeviceOsType';

export const DictionaryServiceOsVersion = z.object({
  deviceOsType: DictionaryServiceDeviceOsType,
  version: z.string().nullable()
}).nullable();

export type DictionaryServiceOsVersion = z.infer<typeof DictionaryServiceOsVersion>;
