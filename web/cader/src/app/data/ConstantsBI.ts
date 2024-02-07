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
  INTEGER: {
    id: 1,
    description: 'INTEGER',
  },
  DOUBLE: {
    id: 2,
    description: 'DOUBLE',
  },
  STRING: {
    id: 3,
    description: 'STRING',
  },
  LOCAL_DATE: {
    id: 4,
    description: 'LOCAL_DATE',
  },
  REGISTER: 5,
};

const ConstBITypeInputList: Array<DescriptionId> = [
  ConstBITypeInput.INTEGER,
  ConstBITypeInput.DOUBLE,
  ConstBITypeInput.LOCAL_DATE,
  ConstBITypeInput.STRING,
];

export {
  ConstBITypeDate,
  ConstBITypeInput,
  ConstBITypeInputList,
  ConstBIPrimitiveOrEntity,
};
