import { z } from 'zod';

export const feedSetServiceConditionType = z.enum(["CATEGORY_ID", "STOCK_QUANTITY", "PRICE", "SALE_PRICE", "RATING", "REVIEWS", "BADGE", "AGE_GROUP", "AVAILABILITY_DATE", "GENDER_GROUP", "GOOGLE_PRODUCT_CATEGORY", "LOCATION", "SALES_RANK", "UNKNOWN"]).nullable();

export type FeedSetServiceConditionType = z.infer<typeof feedSetServiceConditionType>;
