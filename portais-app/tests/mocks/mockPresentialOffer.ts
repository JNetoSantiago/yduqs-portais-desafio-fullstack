import OfferType from "@/types/offer";

const mockPresentialOffer: OfferType = {
  id: 1,
  modality: "PRESENCIAL",
  shift: "Manhã",
  originalPrice: 100000,
  withDiscountPrice: 800,
  addressId: 1,
  createdAt: "2025-10-01T00:00:00Z",
  updatedAt: "2025-10-01T00:00:00Z",
  address: {
    id: 1,
    complement: "",
    zipCode: "645896",
    street: "Rua Exemplo",
    number: "123",
    neighborhood: "Centro",
    cityId: 1,
    stateId: 1,
    city: {
      id: 1,
      name: "Teresina",
      stateId: 1,
      createdAt: "2025-10-01T00:00:00Z",
      updatedAt: "2025-10-01T00:00:00Z",
    },
    state: {
      id: 1,
      name: "Piaui",
      uf: "PI",
      createdAt: "2025-10-01T00:00:00Z",
      updatedAt: "2025-10-01T00:00:00Z",
    },
    createdAt: "2025-10-01T00:00:00Z",
    updatedAt: "2025-10-01T00:00:00Z",
  },
  installments: [
    {
      id: 1,
      deadline: 1,
      offerId: 1,
      value: 800,
      totalPrice: 900,
      createdAt: "2025-10-01T00:00:00Z",
      updatedAt: "2025-10-01T00:00:00Z",
    },
  ],
};

export default mockPresentialOffer;
