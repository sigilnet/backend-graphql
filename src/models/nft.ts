import mongoose, {Schema, model} from 'mongoose';
import mongooseLong from 'mongoose-long';
import {composeMongoose} from 'graphql-compose-mongoose';
import {schemaComposer} from '../schemaComposer';
import {CollectionTC} from '@server/models/collection';
import {UserTC} from './user';

mongooseLong(mongoose);

const metadataSchema = new Schema(
  {
    title: String,
    description: String,
    media: String,
    media_hash: String,
    copies: Number,
    issued_at: Number,
    expires_at: Number,
    starts_at: Number,
    updated_at: Number,
    extra: String,
    reference: String,
    reference_hash: String,
    collection_id: String,
  },
  {_id: false},
);

const nftSchema = new Schema({
  _id: String,
  owner_id: String,
  token_id: String,
  metadata: metadataSchema,
});

export const Nft = model('Nft', nftSchema, 'nfts');
export const NftTC = composeMongoose(Nft, {schemaComposer});

NftTC.addRelation('owner', {
  resolver: () => UserTC.mongooseResolvers.dataLoader(),
  prepareArgs: {
    _id: source => source.owner_id,
  },
  projection: {owner_id: true},
});
