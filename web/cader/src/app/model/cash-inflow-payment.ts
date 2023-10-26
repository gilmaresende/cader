import { DescriptionId } from '../core/model/description-id';
import { SEntidade } from '../core/model/sentidade';

export interface CashInclowPayment extends SEntidade {
  idCashInflow: number;
  value: number;
  payDay: Date;
  observation: string;
  paymentType?: DescriptionId;
  wallet?: DescriptionId;
}
