import { z } from 'zod';

import { adGroupTargetServiceTargetType } from './AdGroupTargetServiceTargetType';
import { adGroupTargetServiceAreaSearchType } from './AdGroupTargetServiceAreaSearchType';
import { adGroupTargetServiceSortField } from './AdGroupTargetServiceSortField';
import { adGroupTargetServiceSortType } from './AdGroupTargetServiceSortType';

export const adGroupTargetServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  targetTypes: z.array(adGroupTargetServiceTargetType).nullable(),
  areaSearchTypes: z.array(adGroupTargetServiceAreaSearchType).nullable(),
  sortField: adGroupTargetServiceSortField,
  sortType: adGroupTargetServiceSortType,
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupTargetServiceSelector = z.infer<typeof adGroupTargetServiceSelector>;
