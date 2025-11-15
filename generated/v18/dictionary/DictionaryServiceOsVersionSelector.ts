import { z } from 'zod';

import { dictionaryServiceDeviceOsType } from './DictionaryServiceDeviceOsType';

export const dictionaryServiceOsVersionSelector = z.object({
  deviceOsType: dictionaryServiceDeviceOsType
}).nullable();

export type DictionaryServiceOsVersionSelector = z.infer<typeof dictionaryServiceOsVersionSelector>;
