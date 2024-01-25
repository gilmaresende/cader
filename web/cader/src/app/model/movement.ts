import { DescriptionId } from '../core/model/description-id';
import { SEntidade } from '../core/model/sentidade';

export interface Movement extends SEntidade {
  description: string;
  movementDate: Date;
  value: number;
  origin: DescriptionId;
  typeRevenueExpence: DescriptionId;
  wallet: DescriptionId;
}
