import { z } from 'zod';

export const GuaranteedAdGroupAdServiceCarousel = z.object({
  displayOrder: z.number().int().nullable(),
  mediaId: z.number().int().nullable(),
  headline: z.string().nullable(),
  description: z.string().nullable(),
  finalUrl: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceCarousel = z.infer<typeof GuaranteedAdGroupAdServiceCarousel>;
