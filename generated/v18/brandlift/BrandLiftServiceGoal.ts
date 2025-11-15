import { z } from 'zod';

export const brandLiftServiceGoal = z.enum(["AD_RECALL", "BRAND_AWARENESS", "MESSAGE_ASSOCIATION", "PURCHASE_INTENTION", "FAVOR", "COMPARISON", "UNKNOWN"]).nullable();

export type BrandLiftServiceGoal = z.infer<typeof brandLiftServiceGoal>;
