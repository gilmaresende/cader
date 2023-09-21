import { SEntidade } from '../core/model/sentidade';

export interface Movement extends SEntidade {
  description: string;
  movementDate: Date;
  origin: number;
  typeRevenueExpence: number;
  value: number;
  idWallet: number;
}
