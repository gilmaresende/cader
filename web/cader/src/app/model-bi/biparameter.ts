import { DescriptionId } from '../core/model/description-id';
import { DescriptionStr } from '../core/model/description-str';
import { BIParameterDefined } from './biparameterdefind';

export interface BIParameter {
  name: string;
  key: string;
  typeInput: number;
  typePrimitive?: DescriptionStr;
  valueDefault?: string;
  subTypeDate?: DescriptionId;
  typeClass?: DescriptionStr;

  /* type: string;
  register?: string;
  defined: Array<BIParameterDefined>;*/
}
