import { DescriptionId } from '../core/model/description-id';
import { SEntidade } from '../core/model/sentidade';
import { ExpensePayment } from './expense-payment';

export interface Expense extends SEntidade {
  description: string;
  payments: Array<ExpensePayment>;
  dueDate: Date;
  origin?: number;
  value: number;
  openValue?: number;
  amountPaid?: number;
  expenseCategory?: DescriptionId;
  paymentType?: DescriptionId;
  wallet?: DescriptionId;
  person?: DescriptionId;
}
