import { SEntidade } from '../core/model/sentidade';
import { BIParameter } from './biparameter';
import { BIQuery } from './biquery';

export interface BI extends SEntidade {
  name: string;
  query: BIQuery;
  bIParameters: Array<BIParameter>;
}
