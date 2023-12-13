import { BIParameterDefined } from './biparameterdefind';

export interface BIParameter {
  type: string;
  register?: string;
  key: string;
  name: string;
  typeInput: number;
  defined: Array<BIParameterDefined>;
}
