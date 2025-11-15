import { z } from 'zod';

export const AppLinkServiceCategoryType = z.enum(["APP", "UNKNOWN"]).nullable();

export type AppLinkServiceCategoryType = z.infer<typeof AppLinkServiceCategoryType>;
