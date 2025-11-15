import { z } from 'zod';

import { DictionaryServiceDeviceOsType } from './DictionaryServiceDeviceOsType';

export const DictionaryServiceOsVersionSelector = z.object({
  deviceOsType: DictionaryServiceDeviceOsType
}).nullable();

export type DictionaryServiceOsVersionSelector = z.infer<typeof DictionaryServiceOsVersionSelector>;
