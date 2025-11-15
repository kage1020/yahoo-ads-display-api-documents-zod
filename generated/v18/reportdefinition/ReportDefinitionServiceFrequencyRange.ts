import { z } from 'zod';

export const reportDefinitionServiceFrequencyRange = z.enum(["DAILY", "WEEKLY", "MONTHLY", "GUARANTEED_CAMPAIGN_PERIOD", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceFrequencyRange = z.infer<typeof reportDefinitionServiceFrequencyRange>;
