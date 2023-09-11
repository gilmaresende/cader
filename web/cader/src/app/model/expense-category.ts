import { SEntidade } from '../core/model/sentidade';

export interface ExpenseCategory extends SEntidade {
  name: string;
  active: number;
}
