import { Test, TestingModule } from '@nestjs/testing';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { EnrollRepository } from './enroll.repository';
import { EnrollService } from './enroll.service';

describe('EnrollService', () => {
  let service: EnrollService;

  const createEnrollDto: CreateEnrollDto = {
    name: 'João Neto',
    email: 'joao@example.com',
    cpf: '12345678900',
    birthdate: '2000-01-01',
    phone: '11999999999',
    yearConclusionSchool: '2018',
    acceptTerms: true,
    allowReceiveNotifications: true,
    offerId: 1,
    installmentId: 1,
  };

  const fakeEnroll = {
    id: 1,
    ...createEnrollDto,
  };

  const enrollRepositoryMock = {
    provide: EnrollRepository,
    useValue: {
      create: jest.fn().mockResolvedValue(fakeEnroll),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrollService, enrollRepositoryMock],
    }).compile();

    service = module.get<EnrollService>(EnrollService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call EnrollRepository.create with correct DTO', async () => {
    const result = await service.create(createEnrollDto);

    expect(enrollRepositoryMock.useValue.create).toHaveBeenCalledTimes(1);
    expect(enrollRepositoryMock.useValue.create).toHaveBeenCalledWith(
      createEnrollDto,
    );
    expect(result).toEqual(fakeEnroll);
  });
});
