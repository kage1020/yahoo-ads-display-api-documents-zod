import { z } from 'zod';

export const recommendationServiceNotTargetingProperAudienceListAdGroupList = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable()
}).nullable();

export type RecommendationServiceNotTargetingProperAudienceListAdGroupList = z.infer<typeof recommendationServiceNotTargetingProperAudienceListAdGroupList>;
