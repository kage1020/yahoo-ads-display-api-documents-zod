import { z } from 'zod';

export const ConversionTrackerServiceStatsPeriod = z.enum(["REALTIME_TODAY", "DEFINITE_VALUE_YESTERDAY", "DEFINITE_VALUE_LASTBSDAY", "DEFINITE_VALUE_LASTWEEK", "DEFINITE_VALUE_WEEK", "DEFINITE_VALUE_TWOWEEK", "DEFINITE_VALUE_THIRTYDAY", "REALTIME_MONTH", "DEFINITE_VALUE_MONTH", "DEFINITE_VALUE_LASTMONTH", "REALTIME_LAST25MONTH", "REALTIME_LAST37MONTH", "CUSTOM_DATE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceStatsPeriod = z.infer<typeof ConversionTrackerServiceStatsPeriod>;
