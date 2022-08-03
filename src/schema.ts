import {schemaComposer} from './schemaComposer';
import {UserTC} from './models/user';

schemaComposer.Query.addFields({
  userOne: UserTC.mongooseResolvers.findOne(),
  userMany: UserTC.mongooseResolvers.findMany(),
  userTotal: UserTC.mongooseResolvers.count(),
  userConnection: UserTC.mongooseResolvers.connection(),
  userPagination: UserTC.mongooseResolvers.pagination(),
});

export const schema = schemaComposer.buildSchema();
