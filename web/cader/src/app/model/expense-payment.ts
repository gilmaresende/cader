import { SEntidade } from '../core/model/sentidade';

export interface ExpensePayment extends SEntidade {
  idWallet?: number;
  idPaymentType?: number;
  value: number;
  payDay: Date;
  observation: string;
}
