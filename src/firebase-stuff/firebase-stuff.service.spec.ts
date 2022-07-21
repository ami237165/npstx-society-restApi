import { Test, TestingModule } from '@nestjs/testing';
import { FirebaseStuffService } from './firebase-stuff.service';

describe('FirebaseStuffService', () => {
  let service: FirebaseStuffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirebaseStuffService],
    }).compile();

    service = module.get<FirebaseStuffService>(FirebaseStuffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
