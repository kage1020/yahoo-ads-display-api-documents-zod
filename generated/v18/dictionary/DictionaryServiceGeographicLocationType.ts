import { z } from 'zod';

export const dictionaryServiceGeographicLocationType = z.enum(["TARGETING", "FEED", "UNKNOWN"]).nullable();

export type DictionaryServiceGeographicLocationType = z.infer<typeof dictionaryServiceGeographicLocationType>;
