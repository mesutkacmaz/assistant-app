import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    configService: ConfigService,
  ) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
      callbackURL: configService.get<string>('GOOGLE_REDIRECT_URL'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, name, emails } = profile;

    const user = await this.usersRepository.findOne({
      where: { googleId: id },
    });

    if (!user) {
      const googleUser = {
        googleId: id,
        email: emails[0].value,
        givenName: name.givenName,
        familyName: name.familyName,
      };

      this.usersRepository.insert(googleUser);
    } else {
      return done(null, user);
    }
  }
}
