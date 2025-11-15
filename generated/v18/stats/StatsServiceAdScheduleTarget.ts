import { z } from 'zod';

import { StatsServiceDayOfWeek } from './StatsServiceDayOfWeek';

export const StatsServiceAdScheduleTarget = z.object({
  dayOfWeek: StatsServiceDayOfWeek,
  endHour: z.number().int().nullable(),
  startHour: z.number().int().nullable()
}).nullable();

export type StatsServiceAdScheduleTarget = z.infer<typeof StatsServiceAdScheduleTarget>;
