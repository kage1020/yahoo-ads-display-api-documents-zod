import { z } from 'zod';

export const AudienceListServiceType = z.enum(["COMBINATION", "SIMILARITY", "WEBSITE_VISITORS", "CUSTOMER_DATA", "APP_USER", "YAHOO_JAPAN_AUDIENCE_DISCOVERY", "ADVANCED_SEGMENTS", "AD_ACTION_USERS", "LINE_OA_FRIEND", "LINE_OA_BLOCK", "BUSINESS_MANAGER", "LINE_ID_DATA", "UNKNOWN"]).nullable();

export type AudienceListServiceType = z.infer<typeof AudienceListServiceType>;
