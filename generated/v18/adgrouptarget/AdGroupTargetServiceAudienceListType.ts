import { z } from 'zod';

export const AdGroupTargetServiceAudienceListType = z.enum(["COMBINATION", "SIMILARITY", "WEBSITE_VISITORS", "CUSTOMER_DATA", "OFFERED_BY_YAHOO_JAPAN", "APP_USER", "YAHOO_JAPAN_AUDIENCE_DISCOVERY", "ADVANCED_SEGMENTS", "AD_ACTION_USERS", "LINE_OA_FRIEND", "LINE_OA_BLOCK", "BUSINESS_MANAGER", "AFFINITY", "IN_MARKET", "ATTRIBUTE_LIFE_EVENTS", "LINE_ID_DATA", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceAudienceListType = z.infer<typeof AdGroupTargetServiceAudienceListType>;
