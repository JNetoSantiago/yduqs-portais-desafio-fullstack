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
