import { z } from 'zod';

import { adGroupTargetServiceDayOfWeek } from './AdGroupTargetServiceDayOfWeek';

export const adGroupTargetServiceAdScheduleTarget = z.object({
  dayOfWeek: adGroupTargetServiceDayOfWeek,
  endHour: z.number().int().nullable(),
  startHour: z.number().int().nullable()
}).nullable();

export type AdGroupTargetServiceAdScheduleTarget = z.infer<typeof adGroupTargetServiceAdScheduleTarget>;
