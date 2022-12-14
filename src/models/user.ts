import mongoose, {Schema, model} from 'mongoose';
import mongooseLong from 'mongoose-long';
import {composeMongoose} from 'graphql-compose-mongoose';
import {schemaComposer} from '../schemaComposer';

mongooseLong(mongoose);

const userSchema = new Schema({
  _id: String,
  id: {type: String, unique: true},
  name: {type: String, index: true},
  avatar: String,
  brief: String,
  contract_account_id: {type: String, index: true},
  created_at: {type: Number, index: true},
  updated_at: {type: Number, index: true},
});

export const User = model('User', userSchema, 'users');
export const UserTC = composeMongoose(User, {schemaComposer});
