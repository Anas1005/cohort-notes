import { Schema, model, Document } from 'mongoose';

// Define interface for User document
export interface UserType {
  name: string;
  email: string;
  age: number;
}

// Define Mongoose schema based on the User interface
const UserSchemaDefinition: Record<keyof UserType, any> = {
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
};

const UserSchema = new Schema<UserType & Document>(UserSchemaDefinition);

// Define and export Mongoose model based on the User interface and schema
const User = model<UserType & Document>('User', UserSchema);

export default User;
