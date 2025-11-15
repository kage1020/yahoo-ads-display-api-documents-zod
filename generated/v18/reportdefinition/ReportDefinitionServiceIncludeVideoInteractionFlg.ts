import { z } from 'zod';

export const reportDefinitionServiceIncludeVideoInteractionFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceIncludeVideoInteractionFlg = z.infer<typeof reportDefinitionServiceIncludeVideoInteractionFlg>;
