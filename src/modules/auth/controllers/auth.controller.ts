import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { GoogleOauthGuard } from '../guards/google-oauth.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
    const user = await this.authService.register(registerDto);
    user.password = undefined;
    return res.status(HttpStatus.CREATED).send({
      ...user,
    });
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const loginData = await this.authService.login(loginDto);
    loginData.user.password = undefined;
    return res.status(HttpStatus.OK).send({ ...loginData });
  }

  @Get('google')
  @UseGuards(GoogleOauthGuard)
  async signInWithGoogle() {}

  @Get('google/redirect')
  @UseGuards(GoogleOauthGuard)
  async signInWithGoogleRedirect(@Res() res: Response) {
    res.redirect('/');
  }
}
