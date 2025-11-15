import { z } from 'zod';

import { ReportDefinitionServiceConversionPathFilterType } from './ReportDefinitionServiceConversionPathFilterType';
import { ReportDefinitionServiceConversionPathFilterOperator } from './ReportDefinitionServiceConversionPathFilterOperator';

export const ReportDefinitionServiceConversionPathFilter = z.object({
  conversionPathFilterType: ReportDefinitionServiceConversionPathFilterType,
  conversionPathFilterOperator: ReportDefinitionServiceConversionPathFilterOperator,
  values: z.array(z.string().nullable()).nullable()
}).nullable();

export type ReportDefinitionServiceConversionPathFilter = z.infer<typeof ReportDefinitionServiceConversionPathFilter>;
