import { DescriptionId } from '../core/model/description-id';
import { SEntidade } from '../core/model/sentidade';

export interface LoteOfExpenses extends SEntidade {
  description?: String;
  firstDue?: Date;
  lastDue?: Date;
  category?: DescriptionId;
  paymentType?: DescriptionId;
  wallet?: DescriptionId;
  person?: DescriptionId;
  valueBase?: number;
  amount?: number;
}
