import CityType from "@/types/city";
import StateType from "@/types/state";

type AddressType = {
  id: number;
  street: string;
  number: string;
  complement: string | null;
  neighborhood: string;
  cityId: number;
  stateId: number;
  zipCode: string;
  createdAt: string;
  updatedAt: string;
  city: CityType;
  state: StateType;
};

export default AddressType;
