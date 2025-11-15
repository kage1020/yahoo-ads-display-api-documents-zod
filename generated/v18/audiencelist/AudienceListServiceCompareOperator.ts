import { z } from 'zod';

export const audienceListServiceCompareOperator = z.enum(["EQUAL", "INCLUDED", "START_WITH", "END_WITH", "NOT_EQUAL", "NOT_INCLUDED", "NOT_START_WITH", "NOT_END_WITH", "UNKNOWN"]).nullable();

export type AudienceListServiceCompareOperator = z.infer<typeof audienceListServiceCompareOperator>;
