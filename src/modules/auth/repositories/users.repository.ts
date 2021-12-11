import { EntityRepository, MongoRepository } from 'typeorm';
import { RegisterDto } from '../dto/register.dto';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UsersRepository extends MongoRepository<User> {
  async createUser(registerDto: RegisterDto): Promise<User> {
    const { email, username, password } = registerDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ email, username, password: hashedPassword });

    try {
      await this.save(user);
      return user;
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate Field
        throw new ConflictException('Email or username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
