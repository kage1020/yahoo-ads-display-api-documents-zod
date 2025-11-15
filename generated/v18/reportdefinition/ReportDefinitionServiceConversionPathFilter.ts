import { z } from 'zod';

import { reportDefinitionServiceConversionPathFilterType } from './ReportDefinitionServiceConversionPathFilterType';
import { reportDefinitionServiceConversionPathFilterOperator } from './ReportDefinitionServiceConversionPathFilterOperator';

export const reportDefinitionServiceConversionPathFilter = z.object({
  conversionPathFilterType: reportDefinitionServiceConversionPathFilterType,
  conversionPathFilterOperator: reportDefinitionServiceConversionPathFilterOperator,
  values: z.array(z.string().nullable()).nullable()
}).nullable();

export type ReportDefinitionServiceConversionPathFilter = z.infer<typeof reportDefinitionServiceConversionPathFilter>;
