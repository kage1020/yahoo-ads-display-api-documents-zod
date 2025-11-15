import { z } from 'zod';

export const ConversionTrackerServiceCategory = z.enum(["NONE", "DEFAULT", "PAGE_VIEW", "PURCHASE", "SIGNUP", "LEAD", "DOWNLOAD", "APP_LAUNCH", "APP_UPDATE", "SIGN_UP", "LOGIN", "SEARCH", "VIEW_LISTING", "VIEW_PRODUCT", "VIEW_CART", "ADD_CART", "ADD_WISHLIST", "CHECK_OUT", "PRODUCT_PURCHASE", "APP_PURCHASE", "SPENT_CREDITS", "PAYMENT_INFO", "REVIEW", "SHARE", "INVITE", "RESERVATION", "TUTORIAL", "DEEPLINK", "START_LEVEL", "END_LEVEL", "LEVEL_ACHIEVED", "UNLOCK_ACHIEVEMENT", "CUSTOM1", "CUSTOM2", "CUSTOM3", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceCategory = z.infer<typeof ConversionTrackerServiceCategory>;
