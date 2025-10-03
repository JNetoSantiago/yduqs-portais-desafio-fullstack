import { Test, TestingModule } from '@nestjs/testing';
import { EnrollController } from './enroll.controller';
import { EnrollRepository } from './enroll.repository';
import { EnrollService } from './enroll.service';

describe('EnrollController', () => {
  let controller: EnrollController;

  const createEnrollDto = {
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
      controllers: [EnrollController],
      providers: [EnrollService, enrollRepositoryMock],
    }).compile();

    controller = module.get<EnrollController>(EnrollController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call EnrollService.create and return the created enroll', async () => {
    const result = await controller.create(createEnrollDto);

    expect(enrollRepositoryMock.useValue.create).toHaveBeenCalledTimes(1);
    expect(enrollRepositoryMock.useValue.create).toHaveBeenCalledWith(
      createEnrollDto,
    );
    expect(result).toEqual(fakeEnroll);
  });
});
