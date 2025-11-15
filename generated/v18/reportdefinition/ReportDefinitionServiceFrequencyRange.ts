import { z } from 'zod';

export const ReportDefinitionServiceFrequencyRange = z.enum(["DAILY", "WEEKLY", "MONTHLY", "GUARANTEED_CAMPAIGN_PERIOD", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceFrequencyRange = z.infer<typeof ReportDefinitionServiceFrequencyRange>;
