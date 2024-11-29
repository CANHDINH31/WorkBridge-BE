import { IsEmail } from 'class-validator';

export class ConditionUserDto {
  @IsEmail()
  email?: string;
}
