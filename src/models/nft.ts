import mongoose, {Schema, model} from 'mongoose';
import mongooseLong from 'mongoose-long';
import {composeMongoose} from 'graphql-compose-mongoose';
import {schemaComposer} from '../schemaComposer';

mongooseLong(mongoose);

const metadataSchema = new Schema({
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
});

const nftSchema = new Schema({
  owner_id: String,
  token_id: String,
  metadata: metadataSchema,
});

export const Nft = model('Nft', nftSchema, 'nfts');
export const NftTC = composeMongoose(Nft, {schemaComposer});
