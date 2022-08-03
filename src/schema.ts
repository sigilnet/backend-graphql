import {schemaComposer} from './schemaComposer';
import {UserTC} from './models/user';
import {NftTC} from './models/nft';
import {CollectionTC} from './models/collection';

schemaComposer.Query.addFields({
  // user
  userOne: UserTC.mongooseResolvers.findOne(),
  userMany: UserTC.mongooseResolvers.findMany(),
  userTotal: UserTC.mongooseResolvers.count(),
  userConnection: UserTC.mongooseResolvers.connection(),
  userPagination: UserTC.mongooseResolvers.pagination(),
  // nft
  nftOne: NftTC.mongooseResolvers.findOne(),
  nftMany: NftTC.mongooseResolvers.findMany(),
  nftTotal: NftTC.mongooseResolvers.count(),
  nftConnection: NftTC.mongooseResolvers.connection(),
  nftPagination: NftTC.mongooseResolvers.pagination(),
  // collection
  collectionOne: CollectionTC.mongooseResolvers.findOne(),
  collectionMany: CollectionTC.mongooseResolvers.findMany(),
  collectionTotal: CollectionTC.mongooseResolvers.count(),
  collectionConnection: CollectionTC.mongooseResolvers.connection(),
  collectionPagination: CollectionTC.mongooseResolvers.pagination(),
});

export const schema = schemaComposer.buildSchema();
