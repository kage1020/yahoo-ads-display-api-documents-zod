import { z } from 'zod';

import { AdGroupTargetServiceDayOfWeek } from './AdGroupTargetServiceDayOfWeek';

export const AdGroupTargetServiceAdScheduleTarget = z.object({
  dayOfWeek: AdGroupTargetServiceDayOfWeek,
  endHour: z.number().int().nullable(),
  startHour: z.number().int().nullable()
}).nullable();

export type AdGroupTargetServiceAdScheduleTarget = z.infer<typeof AdGroupTargetServiceAdScheduleTarget>;
