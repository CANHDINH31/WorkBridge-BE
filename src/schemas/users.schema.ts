import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true, trim: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ enum: ['male', 'female', 'other'], default: 'other' })
  gender: string;

  @Prop({ unique: true })
  phone: string;

  @Prop({ enum: ['seller', 'buyer', 'broker', 'other'], default: 'other' })
  type: string;

  @Prop({ enum: ['user', 'admin'], default: 'user' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
