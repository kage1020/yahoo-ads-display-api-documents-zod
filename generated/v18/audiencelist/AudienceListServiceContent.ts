import { z } from 'zod';

import { AudienceListServiceCombinationAudienceList } from './AudienceListServiceCombinationAudienceList';
import { AudienceListServiceSimilarityAudienceList } from './AudienceListServiceSimilarityAudienceList';
import { AudienceListServiceWebsiteVisitorsAudienceList } from './AudienceListServiceWebsiteVisitorsAudienceList';
import { AudienceListServiceCustomerDataAudienceList } from './AudienceListServiceCustomerDataAudienceList';
import { AudienceListServiceAppUserAudienceList } from './AudienceListServiceAppUserAudienceList';
import { AudienceListServiceYahooJapanAudienceDiscoveryAudienceList } from './AudienceListServiceYahooJapanAudienceDiscoveryAudienceList';
import { AudienceListServiceAdvancedSegmentsAudienceList } from './AudienceListServiceAdvancedSegmentsAudienceList';
import { AudienceListServiceAdActionUsersAudienceList } from './AudienceListServiceAdActionUsersAudienceList';
import { AudienceListServiceLineOaFriendAudienceList } from './AudienceListServiceLineOaFriendAudienceList';
import { AudienceListServiceLineOaBlockAudienceList } from './AudienceListServiceLineOaBlockAudienceList';
import { AudienceListServiceBusinessManagerAudienceList } from './AudienceListServiceBusinessManagerAudienceList';
import { AudienceListServiceLineIdDataAudienceList } from './AudienceListServiceLineIdDataAudienceList';
import { AudienceListServiceType } from './AudienceListServiceType';

export const AudienceListServiceContent = z.object({
  combinationAudienceList: AudienceListServiceCombinationAudienceList,
  similarityAudienceList: AudienceListServiceSimilarityAudienceList,
  websiteVisitorsAudienceList: AudienceListServiceWebsiteVisitorsAudienceList,
  customerDataAudienceList: AudienceListServiceCustomerDataAudienceList,
  appUserAudienceList: AudienceListServiceAppUserAudienceList,
  yahooJapanAudienceDiscoveryAudienceList: AudienceListServiceYahooJapanAudienceDiscoveryAudienceList,
  advancedSegmentsAudienceList: AudienceListServiceAdvancedSegmentsAudienceList,
  adActionUsersAudienceList: AudienceListServiceAdActionUsersAudienceList,
  lineOaFriendAudienceList: AudienceListServiceLineOaFriendAudienceList,
  lineOaBlockAudienceList: AudienceListServiceLineOaBlockAudienceList,
  businessManagerAudienceList: AudienceListServiceBusinessManagerAudienceList,
  lineIdDataAudienceList: AudienceListServiceLineIdDataAudienceList,
  audienceListType: AudienceListServiceType
}).nullable();

export type AudienceListServiceContent = z.infer<typeof AudienceListServiceContent>;
