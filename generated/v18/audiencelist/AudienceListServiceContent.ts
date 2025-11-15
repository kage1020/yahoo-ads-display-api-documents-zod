import { z } from 'zod';

import { audienceListServiceCombinationAudienceList } from './AudienceListServiceCombinationAudienceList';
import { audienceListServiceSimilarityAudienceList } from './AudienceListServiceSimilarityAudienceList';
import { audienceListServiceWebsiteVisitorsAudienceList } from './AudienceListServiceWebsiteVisitorsAudienceList';
import { audienceListServiceCustomerDataAudienceList } from './AudienceListServiceCustomerDataAudienceList';
import { audienceListServiceAppUserAudienceList } from './AudienceListServiceAppUserAudienceList';
import { audienceListServiceYahooJapanAudienceDiscoveryAudienceList } from './AudienceListServiceYahooJapanAudienceDiscoveryAudienceList';
import { audienceListServiceAdvancedSegmentsAudienceList } from './AudienceListServiceAdvancedSegmentsAudienceList';
import { audienceListServiceAdActionUsersAudienceList } from './AudienceListServiceAdActionUsersAudienceList';
import { audienceListServiceLineOaFriendAudienceList } from './AudienceListServiceLineOaFriendAudienceList';
import { audienceListServiceLineOaBlockAudienceList } from './AudienceListServiceLineOaBlockAudienceList';
import { audienceListServiceBusinessManagerAudienceList } from './AudienceListServiceBusinessManagerAudienceList';
import { audienceListServiceLineIdDataAudienceList } from './AudienceListServiceLineIdDataAudienceList';
import { audienceListServiceType } from './AudienceListServiceType';

export const audienceListServiceContent = z.object({
  combinationAudienceList: audienceListServiceCombinationAudienceList,
  similarityAudienceList: audienceListServiceSimilarityAudienceList,
  websiteVisitorsAudienceList: audienceListServiceWebsiteVisitorsAudienceList,
  customerDataAudienceList: audienceListServiceCustomerDataAudienceList,
  appUserAudienceList: audienceListServiceAppUserAudienceList,
  yahooJapanAudienceDiscoveryAudienceList: audienceListServiceYahooJapanAudienceDiscoveryAudienceList,
  advancedSegmentsAudienceList: audienceListServiceAdvancedSegmentsAudienceList,
  adActionUsersAudienceList: audienceListServiceAdActionUsersAudienceList,
  lineOaFriendAudienceList: audienceListServiceLineOaFriendAudienceList,
  lineOaBlockAudienceList: audienceListServiceLineOaBlockAudienceList,
  businessManagerAudienceList: audienceListServiceBusinessManagerAudienceList,
  lineIdDataAudienceList: audienceListServiceLineIdDataAudienceList,
  audienceListType: audienceListServiceType
}).nullable();

export type AudienceListServiceContent = z.infer<typeof audienceListServiceContent>;
