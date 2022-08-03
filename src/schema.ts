import {schemaComposer} from './schemaComposer';
import {UserTC} from './models/user';
import {NftTC} from './models/nft';

schemaComposer.Query.addFields({
  userOne: UserTC.mongooseResolvers.findOne(),
  userMany: UserTC.mongooseResolvers.findMany(),
  userTotal: UserTC.mongooseResolvers.count(),
  userConnection: UserTC.mongooseResolvers.connection(),
  userPagination: UserTC.mongooseResolvers.pagination(),
  //
  nftOne: NftTC.mongooseResolvers.findOne(),
  nftMany: NftTC.mongooseResolvers.findMany(),
  nftTotal: NftTC.mongooseResolvers.count(),
  nftConnection: NftTC.mongooseResolvers.connection(),
  nftPagination: NftTC.mongooseResolvers.pagination(),
});

export const schema = schemaComposer.buildSchema();
