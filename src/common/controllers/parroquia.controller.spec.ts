import { Test, TestingModule } from '@nestjs/testing';
import { ParroquiaController } from './parroquia.controller';

describe('ParroquiaController', () => {
  let controller: ParroquiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParroquiaController],
    }).compile();

    controller = module.get<ParroquiaController>(ParroquiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
