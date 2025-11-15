import { z } from 'zod';

export const DictionaryServiceSharedAudienceListType = z.enum(["AFFINITY", "IN_MARKET", "ATTRIBUTE_LIFE_EVENTS", "UNKNOWN"]).nullable();

export type DictionaryServiceSharedAudienceListType = z.infer<typeof DictionaryServiceSharedAudienceListType>;
