import { DescriptionId } from '../core/model/description-id';
import { DescriptionStr } from '../core/model/description-str';
import { BIParameterDefined } from './biparameterdefind';

export interface BIParameter {
  key: string;
  name: string;
  typeInput: number;
  typePrimitive?: DescriptionStr;
  valueDefault: string;
  subTypeDate?: DescriptionId;
  typeClass?: DescriptionStr;
  customized: boolean;
  optionsDefined: Array<BIParameterDefined>;
}
