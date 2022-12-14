import mongoose, {Schema, model} from 'mongoose';
import mongooseLong from 'mongoose-long';
import {composeMongoose} from 'graphql-compose-mongoose';
import {schemaComposer} from '../schemaComposer';
import {UserTC} from './user';

const SIGILNET_CONTRACT_ID = process.env.SIGILNET_CONTRACT_ID || '';

mongooseLong(mongoose);

const collectionSchema = new Schema({
  _id: String,
  id: {type: String, unique: true},
  name: String,
  cover: String,
  description: String,
  owner_id: {type: String, index: true},
  contract_account_id: {type: String, index: true},
  block_timestamp: {type: String, index: true},
});

export const Collection = model('Collection', collectionSchema, 'collections');
export const CollectionTC = composeMongoose(Collection, {schemaComposer});

CollectionTC.addRelation('owner', {
  resolver: () => UserTC.mongooseResolvers.dataLoader({lean: true}),
  prepareArgs: {
    _id: source => `${SIGILNET_CONTRACT_ID}:${source.owner_id}`,
  },
  projection: {owner_id: true},
});
