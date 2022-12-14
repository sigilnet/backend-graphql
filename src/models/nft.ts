import mongoose, {Schema, model} from 'mongoose';
import mongooseLong from 'mongoose-long';
import {composeMongoose} from 'graphql-compose-mongoose';
import {schemaComposer} from '../schemaComposer';
import {CollectionTC} from '@server/models/collection';
import {UserTC} from './user';

const SIGILNET_CONTRACT_ID = process.env.SIGILNET_CONTRACT_ID || '';

mongooseLong(mongoose);

const extraSchema = new Schema(
  {
    explicit: Boolean,
    edition: Number,
    exclusive: Boolean,
    tag: String,
    royalty: Number,
    category: String,
  },
  {_id: false},
);

const metadataSchema = new Schema(
  {
    title: String,
    description: String,
    media: String,
    media_hash: String,
    copies: Number,
    issued_at: String,
    expires_at: String,
    starts_at: String,
    updated_at: String,
    // extra: String,
    reference: String,
    reference_hash: String,
    collection_id: String,
  },
  {_id: false},
);

const nftSchema = new Schema({
  _id: String,
  owner_id: {type: String, index: true},
  token_id: String,
  metadata: metadataSchema,
  metadata_extra: extraSchema,
  contract_account_id: {type: String, index: true},
  issued_at: {type: String, index: true},
  block_timestamp: {type: String, index: true},
});

export const Nft = model('Nft', nftSchema, 'nfts');
export const NftTC = composeMongoose(Nft, {schemaComposer});

NftTC.addRelation('owner', {
  resolver: () => UserTC.mongooseResolvers.dataLoader({lean: true}),
  prepareArgs: {
    _id: source => `${SIGILNET_CONTRACT_ID}:${source.owner_id}`,
  },
  projection: {owner_id: true},
});

export const nftsFindMany = NftTC.mongooseResolvers.findMany().addFilterArg({
  name: 'ids_in',
  type: '[String!]',
  description: 'Array of nftId',
  query: (rawQuery, value) => {
    rawQuery._id = {$in: value};
  },
});

const metadataTC = NftTC.getFieldOTC('metadata');

metadataTC.addRelation('collection', {
  resolver: () => CollectionTC.mongooseResolvers.dataLoader({lean: true}),
  prepareArgs: {
    _id: source => `nft.${SIGILNET_CONTRACT_ID}:${source.collection_id}`,
  },
  projection: {collection_id: true},
});
