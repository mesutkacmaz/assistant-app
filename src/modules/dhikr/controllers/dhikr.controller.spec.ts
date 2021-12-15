import { Test, TestingModule } from '@nestjs/testing';
import { DhikrController } from './dhikr.controller';
import { DhikrService } from '../services/dhikr.service';

describe('DhikrController', () => {
  let controller: DhikrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DhikrController],
      providers: [DhikrService],
    }).compile();

    controller = module.get<DhikrController>(DhikrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
