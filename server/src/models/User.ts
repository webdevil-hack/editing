import mongoose, { Schema, Document, Model } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  passwordHash: string;
  name: string;
  providers: {
    shotstack?: string; // encrypted
    creatomate?: string; // encrypted
    plainly?: string; // encrypted
    tavus?: string; // encrypted
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true },
    providers: {
      shotstack: { type: String },
      creatomate: { type: String },
      plainly: { type: String },
      tavus: { type: String },
    },
  },
  { timestamps: true }
);

export const User: Model<UserDocument> = mongoose.model<UserDocument>('User', UserSchema);
