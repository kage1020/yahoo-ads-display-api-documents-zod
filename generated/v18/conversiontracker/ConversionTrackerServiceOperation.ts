import { z } from 'zod';

import { ConversionTracker } from './ConversionTracker';

export const ConversionTrackerServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(ConversionTracker)
}).nullable();

export type ConversionTrackerServiceOperation = z.infer<typeof ConversionTrackerServiceOperation>;
