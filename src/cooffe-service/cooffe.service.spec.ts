import { Test, TestingModule } from '@nestjs/testing';
import { CooffeeService } from './cooffe.service';

describe('CooffeServiceService', () => {
  let service: CooffeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CooffeeService],
    }).compile();

    service = module.get<CooffeeService>(CooffeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
