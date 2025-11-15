import { z } from 'zod';

export const dictionaryServiceMediaAdFormat = z.object({
  adFormat: z.string().nullable(),
  aspect: z.boolean().nullable(),
  aspectHeight: z.number().int().nullable(),
  aspectRatio: z.string().nullable(),
  aspectWidth: z.number().int().nullable(),
  campaignBanner: z.boolean().nullable(),
  height: z.number().int().nullable(),
  logo: z.boolean().nullable(),
  maxHeight: z.number().int().nullable(),
  maxWidth: z.number().int().nullable(),
  size: z.number().int().nullable(),
  sizeTo: z.number().int().nullable(),
  staticImage: z.boolean().nullable(),
  thumbnail: z.boolean().nullable(),
  transparent: z.boolean().nullable(),
  width: z.number().int().nullable(),
  richFormat: z.boolean().nullable()
}).nullable();

export type DictionaryServiceMediaAdFormat = z.infer<typeof dictionaryServiceMediaAdFormat>;
