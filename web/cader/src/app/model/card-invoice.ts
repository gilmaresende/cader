import { DescriptionId } from '../core/model/description-id';
import { SEntidade } from '../core/model/sentidade';
import { CardInvoiceLaunch } from './card-invoice-launch';

export interface CardInvoice extends SEntidade {
  value: number;
  card?: DescriptionId;
  dueDate?: Date;
  closedDate: Date;
  launches: Array<CardInvoiceLaunch>;
  refundValue: number;
  valueLaunches: number;
}
