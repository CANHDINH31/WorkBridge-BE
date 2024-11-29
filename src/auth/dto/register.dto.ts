import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEnum(['male', 'female', 'other'], {
    message: 'Gender must be male, female, or other',
  })
  @IsOptional()
  gender?: string;

  @IsString({ message: 'Phone must be a string' })
  @IsOptional()
  phone?: string;

  @IsEnum(['seller', 'buyer', 'broker', 'other'], {
    message: 'Type must be seller, buyer, broker, or other',
  })
  @IsOptional()
  type?: string;
}
