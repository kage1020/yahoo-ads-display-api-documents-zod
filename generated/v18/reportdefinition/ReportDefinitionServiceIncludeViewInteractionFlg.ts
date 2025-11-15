import { z } from 'zod';

export const ReportDefinitionServiceIncludeViewInteractionFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceIncludeViewInteractionFlg = z.infer<typeof ReportDefinitionServiceIncludeViewInteractionFlg>;
