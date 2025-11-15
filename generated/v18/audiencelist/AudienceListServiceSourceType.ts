import { z } from 'zod';

export const AudienceListServiceSourceType = z.enum(["SITE_RETARGETING_TAG", "CUSTOMER_DATA_FILE", "APP_DATA", "YAHOO_JAPAN_AUDIENCE_DISCOVERY", "ADVANCED_SEGMENTS", "AD_ACTION", "LINE_OFFICIAL_ACCOUNT", "BUSINESS_MANAGER", "LINE_ID_DATA", "UNKNOWN"]).nullable();

export type AudienceListServiceSourceType = z.infer<typeof AudienceListServiceSourceType>;
