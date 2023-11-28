import { SEntidade } from '../core/model/sentidade';

export interface CardInvoiceLaunch extends SEntidade {
  dateLaunch: Date;
  value: number;
  number: number;
  description: string;
  amountLaunches: number;
}
