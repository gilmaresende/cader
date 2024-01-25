import { SEntidade } from '../core/model/sentidade';

export interface IncomeCategory extends SEntidade {
  name: string;
  active: number;
}
