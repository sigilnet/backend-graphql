import {schemaComposer} from './schemaComposer';
import {UserTC} from './models/user';
import {NftTC} from './models/nft';
import {CollectionTC} from './models/collection';

schemaComposer.Query.addFields({
  // user
  userById: UserTC.mongooseResolvers.findById(),
  userByIds: UserTC.mongooseResolvers.findByIds(),
  userOne: UserTC.mongooseResolvers.findOne(),
  userMany: UserTC.mongooseResolvers.findMany(),
  userTotal: UserTC.mongooseResolvers.count(),
  userConnection: UserTC.mongooseResolvers.connection(),
  userPagination: UserTC.mongooseResolvers.pagination(),
  // nft
  nftById: NftTC.mongooseResolvers.findById(),
  nftByIds: NftTC.mongooseResolvers.findByIds(),
  nftOne: NftTC.mongooseResolvers.findOne(),
  nftMany: NftTC.mongooseResolvers.findMany(),
  nftTotal: NftTC.mongooseResolvers.count(),
  nftConnection: NftTC.mongooseResolvers.connection(),
  nftPagination: NftTC.mongooseResolvers.pagination(),
  // collection
  collectionById: CollectionTC.mongooseResolvers.findById(),
  collectionByIds: CollectionTC.mongooseResolvers.findByIds(),
  collectionOne: CollectionTC.mongooseResolvers.findOne(),
  collectionMany: CollectionTC.mongooseResolvers.findMany(),
  collectionTotal: CollectionTC.mongooseResolvers.count(),
  collectionConnection: CollectionTC.mongooseResolvers.connection(),
  collectionPagination: CollectionTC.mongooseResolvers.pagination(),
});

export const schema = schemaComposer.buildSchema();
