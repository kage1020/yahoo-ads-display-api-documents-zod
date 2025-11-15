import { z } from 'zod';

export const FeedSetServiceCompareOperator = z.enum(["EQUAL", "NOT_EQUAL", "GREATER_THAN_EQUALS", "LESS_THAN_EQUALS", "UNKNOWN"]).nullable();

export type FeedSetServiceCompareOperator = z.infer<typeof FeedSetServiceCompareOperator>;
