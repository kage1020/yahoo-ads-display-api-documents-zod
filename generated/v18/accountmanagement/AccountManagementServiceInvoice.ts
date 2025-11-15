import { z } from 'zod';

export const accountManagementServiceInvoice = z.object({
  budgetAmount: z.number().int().nullable()
}).nullable();

export type AccountManagementServiceInvoice = z.infer<typeof accountManagementServiceInvoice>;
