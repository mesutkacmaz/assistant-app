import { Injectable } from '@nestjs/common';
import dhikrs from '../sample.dhikr';

@Injectable()
export class DhikrService {
  findAll() {
    return dhikrs;
  }
}
