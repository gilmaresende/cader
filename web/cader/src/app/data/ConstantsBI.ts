import { DescriptionId } from '../core/model/description-id';

const ConstBITypeDate = {
  EMPTY: 0,
  FIST_DAY_MONTH: 1,
  LAST_DAY_MONTH: 2,
};

const ConstBIPrimitiveOrEntity = {
  PRIMITIVE: 1,
  ENTITY: 2,
};

const ConstBITypeInput = {
  INTEGER: 1,
  DOUBLE: 2,
  STRING: 3,
  LOCAL_DATE: 4,
  REGISTER: 5,
};

const ConstBITypeInputList: Array<DescriptionId> = [
  {
    id: 1,
    description: 'INTEGER',
  },
  {
    id: 2,
    description: 'DOUBLE',
  },
  {
    id: 3,
    description: 'STRING',
  },
  {
    id: 4,
    description: 'LOCAL_DATE',
  },
  {
    id: 5,
    description: 'REGISTER',
  },
];

export {
  ConstBITypeDate,
  ConstBITypeInput,
  ConstBITypeInputList,
  ConstBIPrimitiveOrEntity,
};
