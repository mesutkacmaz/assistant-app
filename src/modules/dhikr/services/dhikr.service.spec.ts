import { Test, TestingModule } from '@nestjs/testing';
import { DhikrService } from './dhikr.service';

describe('DhikrService', () => {
  let service: DhikrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DhikrService],
    }).compile();

    service = module.get<DhikrService>(DhikrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
