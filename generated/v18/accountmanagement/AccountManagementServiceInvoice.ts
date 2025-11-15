import { z } from 'zod';

export const AccountManagementServiceInvoice = z.object({
  budgetAmount: z.number().int().nullable()
}).nullable();

export type AccountManagementServiceInvoice = z.infer<typeof AccountManagementServiceInvoice>;
