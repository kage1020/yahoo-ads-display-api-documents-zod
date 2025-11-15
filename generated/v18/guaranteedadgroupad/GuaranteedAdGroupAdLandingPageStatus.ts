import { z } from 'zod';

export const guaranteedAdGroupAdLandingPageStatus = z.enum(["COMPLETED", "SPECIFIED_UPDATE_SCHEDULED_TIME", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdLandingPageStatus = z.infer<typeof guaranteedAdGroupAdLandingPageStatus>;
