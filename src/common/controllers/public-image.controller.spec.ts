import { Test, TestingModule } from '@nestjs/testing';
import { PublicImageController } from './public-image.controller';

describe('PublicImageController', () => {
  let controller: PublicImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicImageController],
    }).compile();

    controller = module.get<PublicImageController>(PublicImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
