import {schemaComposer} from './schemaComposer';
import {UserTC} from './models/user';
import {NftTC, nftsFindMany} from './models/nft';
import {CollectionTC} from './models/collection';

schemaComposer.Query.addFields({
  // user
  userById: UserTC.mongooseResolvers.findById(),
  userByIds: UserTC.mongooseResolvers.findByIds(),
  user: UserTC.mongooseResolvers.findOne(),
  users: UserTC.mongooseResolvers.findMany(),
  userCount: UserTC.mongooseResolvers.count(),
  userConnection: UserTC.mongooseResolvers.connection(),
  userPagination: UserTC.mongooseResolvers.pagination(),
  // nft
  nftById: NftTC.mongooseResolvers.findById(),
  nftByIds: NftTC.mongooseResolvers.findByIds(),
  nft: NftTC.mongooseResolvers.findOne(),
  nfts: nftsFindMany,
  nftCount: NftTC.mongooseResolvers.count(),
  nftConnection: NftTC.mongooseResolvers.connection(),
  nftPagination: NftTC.mongooseResolvers.pagination(),
  // collection
  collectionById: CollectionTC.mongooseResolvers.findById(),
  collectionByIds: CollectionTC.mongooseResolvers.findByIds(),
  collection: CollectionTC.mongooseResolvers.findOne(),
  collections: CollectionTC.mongooseResolvers.findMany(),
  collectionCount: CollectionTC.mongooseResolvers.count(),
  collectionConnection: CollectionTC.mongooseResolvers.connection(),
  collectionPagination: CollectionTC.mongooseResolvers.pagination(),
});

export const schema = schemaComposer.buildSchema();
