import { z } from 'zod';

export const audienceListServiceRuleType = z.enum(["URL", "LABEL", "REFERER_URL", "PAGE_TYPE", "ITEM_ID", "ITEM_CATEGORY_ID", "EVENT_TYPE", "UNKNOWN"]).nullable();

export type AudienceListServiceRuleType = z.infer<typeof audienceListServiceRuleType>;
