import { z } from 'zod';

export const AdGroupAdServiceCarouselGainFriends = z.object({
  displayOrder: z.number().int().nullable(),
  mediaId: z.number().int().nullable(),
  headline: z.string().nullable(),
  description: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceCarouselGainFriends = z.infer<typeof AdGroupAdServiceCarouselGainFriends>;
