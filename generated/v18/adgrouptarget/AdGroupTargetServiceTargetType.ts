import { z } from 'zod';

export const adGroupTargetServiceTargetType = z.enum(["AD_SCHEDULE_TARGET", "GEO_TARGET", "AGE_TARGET", "GENDER_TARGET", "AUDIENCE_LIST_TARGET", "PLACEMENT_TARGET", "DEVICE_TARGET", "APP_TARGET", "OS_TARGET", "OS_VERSION_TARGET", "POSITION_TARGET", "PLACEMENT_CATEGORY_TARGET", "PLACEMENT_CATEGORY_DETAIL_TARGET", "CONTENTS_TARGET", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceTargetType = z.infer<typeof adGroupTargetServiceTargetType>;
