import { SEntidade } from '../core/model/sentidade';

export interface Expense extends SEntidade {
  description: string;
  payments: Array<any>;
}