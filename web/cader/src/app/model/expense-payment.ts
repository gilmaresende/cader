import { DescriptionId } from '../core/model/description-id';
import { SEntidade } from '../core/model/sentidade';

export interface ExpensePayment extends SEntidade {
  idExpense: number;
  value: number;
  payDay: Date;
  observation: string;
  paymentType?: DescriptionId;
  wallet?: DescriptionId;
}
