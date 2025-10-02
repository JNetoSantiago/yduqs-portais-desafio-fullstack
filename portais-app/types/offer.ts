import AddressType from "@/types/address";
import InstallmentType from "@/types/installment";

type OfferType = {
  id: number;
  modality: string;
  shift: string;
  originalPrice: number;
  withDiscountPrice: number;
  addressId: number;
  createdAt: string;
  updatedAt: string;
  address: AddressType;
  installments: InstallmentType[];
};

export default OfferType;
