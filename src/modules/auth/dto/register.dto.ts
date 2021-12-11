import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Please enter a valid email' })
  @IsNotEmpty()
  email: string;

  @MinLength(4, { message: 'Username must be at least 4 characters' })
  @IsNotEmpty()
  username: string;

  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @IsNotEmpty()
  password: string;
}
