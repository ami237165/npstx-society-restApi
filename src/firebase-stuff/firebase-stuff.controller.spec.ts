import { Test, TestingModule } from '@nestjs/testing';
import { FirebaseStuffController } from './firebase-stuff.controller';
import { FirebaseStuffService } from './firebase-stuff.service';

describe('FirebaseStuffController', () => {
  let controller: FirebaseStuffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirebaseStuffController],
      providers: [FirebaseStuffService],
    }).compile();

    controller = module.get<FirebaseStuffController>(FirebaseStuffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
