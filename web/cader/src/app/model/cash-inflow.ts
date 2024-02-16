import { DescriptionId } from '../core/model/description-id';
import { SEntidade } from '../core/model/sentidade';

export interface CashInflow extends SEntidade {
  description: string;
  payments?: [];
  dueDate: Date;
  openingDate: Date;
  valueTotal: number;
  openValue?: number;
  amountPaid?: number;
  incomeCategory?: DescriptionId;
  paymentType?: DescriptionId;
  wallet?: DescriptionId;
  person?: DescriptionId;
  observation: string;
}
