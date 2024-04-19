import { Address } from "../address";

export type User = {
  name: string;
  email: string;
  id: number;
  address?: Address;
};
