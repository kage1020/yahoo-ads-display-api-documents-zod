import { z } from 'zod';

import { DictionaryServiceFeedItemGoogleProductCategory } from './DictionaryServiceFeedItemGoogleProductCategory';

export const DictionaryServiceFeedItemGoogleProductCategory = z.object({
  child: z.array(DictionaryServiceFeedItemGoogleProductCategory).nullable(),
  fullName: z.string().nullable(),
  id: z.string().nullable(),
  name: z.string().nullable(),
  order: z.string().nullable(),
  parent: z.string().nullable()
}).nullable();

export type DictionaryServiceFeedItemGoogleProductCategory = z.infer<typeof DictionaryServiceFeedItemGoogleProductCategory>;
