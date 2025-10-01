import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './../prisma/prisma.service';
import { OffersService } from './offers.service';

const fakeOffers = [
  {
    id: 1,
    modality: 'PRESENCIAL',
    shift: 'MORNING',
    originalPrice: 4752,
    withDiscountPrice: 2613,
    addressId: 1,
    createdAt: '2025-10-01T11:52:20.850Z',
    updatedAt: '2025-10-01T11:52:20.850Z',
    address: {
      id: 1,
      street: 'Rua Dr. Sales de Oliveira',
      number: '1661',
      complement: null,
      neighborhood: 'Vila Industrial',
      cityId: 1,
      stateId: 1,
      zipCode: '13000-000',
      createdAt: '2025-10-01T11:52:20.833Z',
      updatedAt: '2025-10-01T11:52:20.833Z',
    },
  },
  {
    id: 2,
    modality: 'EAD',
    shift: 'MORNING',
    originalPrice: 0,
    withDiscountPrice: 0,
    addressId: 2,
    createdAt: '2025-10-01T11:52:20.858Z',
    updatedAt: '2025-10-01T11:52:20.858Z',
    address: {
      id: 2,
      street: 'Av. das Américas',
      number: '4.200',
      complement: 'Bloco 11',
      neighborhood: 'Tom Jobim',
      cityId: 2,
      stateId: 2,
      zipCode: '22000-000',
      createdAt: '2025-10-01T11:52:20.846Z',
      updatedAt: '2025-10-01T11:52:20.846Z',
    },
  },
];

const prismaMock = {
  offer: {
    findMany: jest.fn().mockResolvedValue(fakeOffers),
  },
};

describe('OffersService', () => {
  let service: OffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OffersService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<OffersService>(OffersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return all offers', async () => {
    const response = await service.findAll();

    expect(response).toEqual(fakeOffers);
    expect(prismaMock.offer.findMany).toHaveBeenCalledTimes(1);
    expect(prismaMock.offer.findMany).toHaveBeenCalledWith({
      include: { address: true },
    });
  });
});
