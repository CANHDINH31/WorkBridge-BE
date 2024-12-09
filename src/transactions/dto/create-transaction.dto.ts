import {
  IsString,
  IsEnum,
  IsOptional,
  IsNumber,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  inspection_period: number;

  @IsEnum(['seller', 'buyer', 'broker'])
  @IsOptional()
  role: string;

  @IsEnum(['vnd', 'usd'])
  @IsOptional()
  currency: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @IsOptional()
  fee_price: number;

  @IsEnum(['standard_shipping', 'cargo_shipping', 'no_shipping'])
  @IsOptional()
  shipping_method: string;

  @IsEnum(['buyer', 'seller'])
  @IsOptional()
  shipping_fee_paid_by: string;

  @IsString()
  @IsOptional()
  make: string;

  @IsString()
  @IsOptional()
  model: string;

  @IsString()
  @IsOptional()
  year: string;

  @IsString()
  @IsOptional()
  odometerear: string;

  @IsString()
  @IsOptional()
  vin: string;

  @IsEnum(['buyer', 'seller', 'fair'])
  @IsOptional()
  fee_workbridge: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsEnum(['confidential', 'buyer', 'seller', 'buyer_and_seller'])
  @IsOptional()
  disclosure: string;
}
