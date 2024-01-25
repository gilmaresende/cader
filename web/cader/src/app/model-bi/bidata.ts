import { BIParameter } from './biparameter';
import { BIQuery } from './biquery';

export interface BIData {
  name: string;
  query: BIQuery;
  bIParameters: Array<BIParameter>;
}
