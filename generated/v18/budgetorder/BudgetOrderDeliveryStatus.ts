import { z } from 'zod';

export const BudgetOrderDeliveryStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type BudgetOrderDeliveryStatus = z.infer<typeof BudgetOrderDeliveryStatus>;
