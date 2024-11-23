
import mongoose from 'mongoose';
import UserI from './user.interface';
const { Schema } = mongoose;

const UserSchema = new Schema<UserI>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


export const UserModel =  mongoose.model<UserI>('User', UserSchema);