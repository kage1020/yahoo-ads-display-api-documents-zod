import { z } from 'zod';

export const CampaignServiceSkanTcpaTargetType = z.enum(["SKAN_INSTALLS", "SKAN_INSTALLS_VIA_CLICK", "UNKNOWN"]).nullable();

export type CampaignServiceSkanTcpaTargetType = z.infer<typeof CampaignServiceSkanTcpaTargetType>;
