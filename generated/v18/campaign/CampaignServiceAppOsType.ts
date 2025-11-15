import { z } from 'zod';

export const campaignServiceAppOsType = z.enum(["ANDROID", "IOS", "UNKNOWN"]).nullable();

export type CampaignServiceAppOsType = z.infer<typeof campaignServiceAppOsType>;
