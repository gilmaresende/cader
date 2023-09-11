import { SEntidade } from '../core/model/sentidade';

export interface PaymentType extends SEntidade {
  name: string;
  active: number;
}
