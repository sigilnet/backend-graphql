import mongoose, {Schema, model} from 'mongoose';
import mongooseLong from 'mongoose-long';
import {composeMongoose} from 'graphql-compose-mongoose';
import {schemaComposer} from '../schemaComposer';

mongooseLong(mongoose);

const collectionSchema = new Schema({
  id: {type: String, uniq: true},
  name: String,
  cover: String,
  owner_id: {type: String, index: true},
});

export const Collection = model('Collection', collectionSchema, 'collections');
export const CollectionTC = composeMongoose(Collection, {schemaComposer});
