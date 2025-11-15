import { z } from 'zod';

export const audienceListServiceLogicalOperator = z.enum(["OR", "AND", "NOTIN", "UNKNOWN"]).nullable();

export type AudienceListServiceLogicalOperator = z.infer<typeof audienceListServiceLogicalOperator>;
