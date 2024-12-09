import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema({ timestamps: true })
export class Transaction {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true })
  inspection_period: number;

  @Prop({ enum: ['seller', 'buyer', 'broker'] })
  role: string;

  @Prop({ enum: ['vnd', 'usd'] })
  currency: string;

  @Prop({ trim: true })
  name: string;

  @Prop({})
  price: number;

  @Prop({})
  description: string;

  @Prop({})
  category: string;

  @Prop({})
  fee_price: number;

  @Prop({ enum: ['standard_shipping', 'cargo_shipping', 'no_shipping'] })
  shipping_method: string;

  @Prop({ enum: ['buyer', 'seller'] })
  shipping_fee_paid_by: string;

  @Prop({})
  make: string;

  @Prop({})
  model: string;

  @Prop({})
  year: string;

  @Prop({})
  odometerear: string;

  @Prop({})
  vin: string;

  @Prop({ enum: ['buyer', 'seller', 'fair'] })
  fee_workbridge: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop({ enum: ['confidential', 'buyer', 'seller', 'buyer_and_seller'] })
  disclosure: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
