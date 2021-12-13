import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Please enter a valid email' })
  @IsNotEmpty()
  email: string;

  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
