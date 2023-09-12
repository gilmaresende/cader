import { SEntidade } from '../core/model/sentidade';

export interface Wallet extends SEntidade {
  name: string;
  active: number;
}
