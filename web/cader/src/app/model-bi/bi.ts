import { SEntidade } from '../core/model/sentidade';
import { BIData } from './bidata';

export interface BI extends SEntidade {
  data: string;
  name: string;
}
