import { z } from 'zod';

export const appLinkServiceCategoryType = z.enum(["APP", "UNKNOWN"]).nullable();

export type AppLinkServiceCategoryType = z.infer<typeof appLinkServiceCategoryType>;
