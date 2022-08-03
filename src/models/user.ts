import mongoose, {Schema, model} from 'mongoose';
import mongooseLong from 'mongoose-long';
import {composeMongoose} from 'graphql-compose-mongoose';
import {schemaComposer} from '../schemaComposer';

mongooseLong(mongoose);

export const userSchema = new Schema({
  id: {type: String, uniq: true},
  name: String,
  avatar: String,
});

export const User = model('User', userSchema, 'users');
export const UserTC = composeMongoose(User, {schemaComposer});
