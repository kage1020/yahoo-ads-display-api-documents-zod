import { z } from 'zod';

export const ReportDefinitionServiceFieldAttribute = z.object({
  displayFieldName: z.string().nullable(),
  fieldName: z.string().nullable(),
  fieldType: z.string().nullable(),
  filterable: z.boolean().nullable(),
  impossibleCombinationFields: z.array(z.string().nullable()).nullable(),
  xmlAttributeName: z.string().nullable()
}).nullable();

export type ReportDefinitionServiceFieldAttribute = z.infer<typeof ReportDefinitionServiceFieldAttribute>;
