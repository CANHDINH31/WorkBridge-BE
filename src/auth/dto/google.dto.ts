import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class GoogleDto {
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
  name: string;
}
