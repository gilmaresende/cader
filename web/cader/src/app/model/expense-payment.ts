import { SEntidade } from '../core/model/sentidade';

export interface ExpensePayment extends SEntidade {
  idExpense?: number;
  idWallet?: number;
  idPaymentType?: number;
  value: number;
  payDay: Date;
  observation: string;
}
