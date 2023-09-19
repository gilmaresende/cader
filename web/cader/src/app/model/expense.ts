import { SEntidade } from '../core/model/sentidade';
import { ExpensePayment } from './expense-payment';

export interface Expense extends SEntidade {
  description: string;
  payments: Array<ExpensePayment>;
  dueDate: Date;
  origin: number;
  value: 0;
  idExpenseCategory?: number;
  idPaymentType?: number;
  idWallet?: number;
  idPerson?: number;
}
