import { z } from 'zod';

export const reportDefinitionServiceConversionPathFilterType = z.enum(["CAMPAIGN_ID", "CAMPAIGN_NAME", "CONVERSION_ID", "ADGROUP_ID", "ADGROUP_NAME", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceConversionPathFilterType = z.infer<typeof reportDefinitionServiceConversionPathFilterType>;
