import { DescriptionId } from '../core/model/description-id';
import { DescriptionStr } from '../core/model/description-str';
import { BIParameterDefined } from './biparameterdefind';

export interface BIParameter {
  key: string;
  name: string;
  typePrimitiveOrEntity: number;
  typePrimitive: DescriptionId;
  valueDefault: string;
  subTypeDate?: number;
  typeClass?: DescriptionStr;
  customized: boolean;
  optionsDefined: Array<BIParameterDefined>;
}
