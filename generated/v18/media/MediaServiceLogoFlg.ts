import { z } from 'zod';

export const MediaServiceLogoFlg = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type MediaServiceLogoFlg = z.infer<typeof MediaServiceLogoFlg>;
