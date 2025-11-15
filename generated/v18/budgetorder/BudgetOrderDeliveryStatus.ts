import { z } from 'zod';

export const budgetOrderDeliveryStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type BudgetOrderDeliveryStatus = z.infer<typeof budgetOrderDeliveryStatus>;
