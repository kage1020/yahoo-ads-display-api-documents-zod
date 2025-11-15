import { z } from 'zod';

import { statsServiceDayOfWeek } from './StatsServiceDayOfWeek';

export const statsServiceAdScheduleTarget = z.object({
  dayOfWeek: statsServiceDayOfWeek,
  endHour: z.number().int().nullable(),
  startHour: z.number().int().nullable()
}).nullable();

export type StatsServiceAdScheduleTarget = z.infer<typeof statsServiceAdScheduleTarget>;
