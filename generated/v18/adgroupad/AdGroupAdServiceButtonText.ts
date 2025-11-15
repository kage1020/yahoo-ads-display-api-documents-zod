import { z } from 'zod';

export const AdGroupAdServiceButtonText = z.enum(["FOR_MORE_INFO", "CONFIRM_NOW", "APPLY_HERE", "PURCHASE", "EXPERIENCE", "CONFIRM_PROPERTY", "REQUEST_INFO", "DOWNLOAD", "INSTALL", "MORE_DETAIL", "RESERVE_HERE", "REGISTER", "APPLY_NOW", "PURCHASE_NOW", "RESERVE_NOW", "REGISTER_NOW", "CONTACT_US", "GAIN_FRIENDS", "PLAY_GAME", "USE_APP", "LISTEN_TO_MUSIC", "UNKNOWN"]).nullable();

export type AdGroupAdServiceButtonText = z.infer<typeof AdGroupAdServiceButtonText>;
