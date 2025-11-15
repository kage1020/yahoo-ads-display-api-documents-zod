import { z } from 'zod';

export const CampaignServiceAppOsType = z.enum(["ANDROID", "IOS", "UNKNOWN"]).nullable();

export type CampaignServiceAppOsType = z.infer<typeof CampaignServiceAppOsType>;
