import { z } from 'zod';

export const AdGroupTargetServicePositionType = z.enum(["INSTREAM_PREROLL", "INSTREAM_MIDROLL", "INSTREAM_POSTROLL", "UNKNOWN"]).nullable();

export type AdGroupTargetServicePositionType = z.infer<typeof AdGroupTargetServicePositionType>;
