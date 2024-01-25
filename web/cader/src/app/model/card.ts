import { SEntidade } from '../core/model/sentidade';

export interface Card extends SEntidade {
  name: string;
  active: number;
}
