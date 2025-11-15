import { z } from 'zod';

export const ReportDefinitionServiceIncludeVideoInteractionFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceIncludeVideoInteractionFlg = z.infer<typeof ReportDefinitionServiceIncludeVideoInteractionFlg>;
