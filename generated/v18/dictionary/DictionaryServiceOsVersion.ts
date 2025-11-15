import { z } from 'zod';

import { dictionaryServiceDeviceOsType } from './DictionaryServiceDeviceOsType';

export const dictionaryServiceOsVersion = z.object({
  deviceOsType: dictionaryServiceDeviceOsType,
  version: z.string().nullable()
}).nullable();

export type DictionaryServiceOsVersion = z.infer<typeof dictionaryServiceOsVersion>;
