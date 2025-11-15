import { z } from 'zod';

export const DictionaryServiceDeviceOsType = z.enum(["ANDROID", "IOS", "UNKNOWN"]).nullable();

export type DictionaryServiceDeviceOsType = z.infer<typeof DictionaryServiceDeviceOsType>;
