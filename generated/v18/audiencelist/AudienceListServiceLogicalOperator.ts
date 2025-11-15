import { z } from 'zod';

export const AudienceListServiceLogicalOperator = z.enum(["OR", "AND", "NOTIN", "UNKNOWN"]).nullable();

export type AudienceListServiceLogicalOperator = z.infer<typeof AudienceListServiceLogicalOperator>;
