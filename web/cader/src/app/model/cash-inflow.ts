import { DescriptionId } from '../core/model/description-id';
import { SEntidade } from '../core/model/sentidade';

export interface CashInflow extends SEntidade {
  description: string;
  payments?: [];
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
