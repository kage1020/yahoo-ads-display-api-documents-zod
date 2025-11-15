import { z } from 'zod';

import { AdGroupTargetServiceTargetType } from './AdGroupTargetServiceTargetType';
import { AdGroupTargetServiceAreaSearchType } from './AdGroupTargetServiceAreaSearchType';
import { AdGroupTargetServiceSortField } from './AdGroupTargetServiceSortField';
import { AdGroupTargetServiceSortType } from './AdGroupTargetServiceSortType';

export const AdGroupTargetServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  targetTypes: z.array(AdGroupTargetServiceTargetType).nullable(),
  areaSearchTypes: z.array(AdGroupTargetServiceAreaSearchType).nullable(),
  sortField: AdGroupTargetServiceSortField,
  sortType: AdGroupTargetServiceSortType,
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupTargetServiceSelector = z.infer<typeof AdGroupTargetServiceSelector>;
