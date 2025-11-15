import { z } from 'zod';

export const DictionaryServiceGeographicLocationType = z.enum(["TARGETING", "FEED", "UNKNOWN"]).nullable();

export type DictionaryServiceGeographicLocationType = z.infer<typeof DictionaryServiceGeographicLocationType>;
