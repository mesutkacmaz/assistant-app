import { Controller, Get } from '@nestjs/common';
import { DhikrService } from '../services/dhikr.service';

@Controller('dhikrs')
export class DhikrController {
  constructor(private readonly dhikrService: DhikrService) {}

  @Get()
  findAll() {
    return this.dhikrService.findAll();
  }
}
