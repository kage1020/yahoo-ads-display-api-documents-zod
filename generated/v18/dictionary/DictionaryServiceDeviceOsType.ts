import { z } from 'zod';

export const dictionaryServiceDeviceOsType = z.enum(["ANDROID", "IOS", "UNKNOWN"]).nullable();

export type DictionaryServiceDeviceOsType = z.infer<typeof dictionaryServiceDeviceOsType>;
