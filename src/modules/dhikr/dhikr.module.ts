import { Module } from '@nestjs/common';
import { DhikrService } from './services/dhikr.service';
import { DhikrController } from './controllers/dhikr.controller';

@Module({
  controllers: [DhikrController],
  providers: [DhikrService],
})
export class DhikrModule {}
