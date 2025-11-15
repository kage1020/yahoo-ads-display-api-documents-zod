import { z } from 'zod';

export const GuaranteedAdGroupAdLandingPageStatus = z.enum(["COMPLETED", "SPECIFIED_UPDATE_SCHEDULED_TIME", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdLandingPageStatus = z.infer<typeof GuaranteedAdGroupAdLandingPageStatus>;
