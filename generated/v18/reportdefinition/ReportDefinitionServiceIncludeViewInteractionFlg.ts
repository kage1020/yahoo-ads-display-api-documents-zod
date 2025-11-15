import { z } from 'zod';

export const reportDefinitionServiceIncludeViewInteractionFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceIncludeViewInteractionFlg = z.infer<typeof reportDefinitionServiceIncludeViewInteractionFlg>;
