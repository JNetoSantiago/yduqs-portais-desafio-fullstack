import { Test, TestingModule } from '@nestjs/testing';
import { OffersController } from './offers.controller';
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

const offersServiceMock = {
  provide: OffersService,
  useValue: {
    findAll: jest.fn().mockResolvedValue(fakeOffers),
  },
};

describe('OffersController', () => {
  let controller: OffersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffersController],
      providers: [offersServiceMock],
    }).compile();

    controller = module.get<OffersController>(OffersController);
  });

  it('should be defined', async () => {
    const response = await controller.findAll();

    expect(response).toEqual(fakeOffers);
    expect(offersServiceMock.useValue.findAll).toHaveBeenCalledTimes(1);
    expect(
      offersServiceMock.useValue.findAll,
    ).toHaveBeenCalledWith(/* nothing */);
  });
});
