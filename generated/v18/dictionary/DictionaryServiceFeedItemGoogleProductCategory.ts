import { z } from 'zod';

import { dictionaryServiceFeedItemGoogleProductCategory } from './DictionaryServiceFeedItemGoogleProductCategory';

export const dictionaryServiceFeedItemGoogleProductCategory = z.object({
  child: z.array(dictionaryServiceFeedItemGoogleProductCategory).nullable(),
  fullName: z.string().nullable(),
  id: z.string().nullable(),
  name: z.string().nullable(),
  order: z.string().nullable(),
  parent: z.string().nullable()
}).nullable();

export type DictionaryServiceFeedItemGoogleProductCategory = z.infer<typeof dictionaryServiceFeedItemGoogleProductCategory>;
