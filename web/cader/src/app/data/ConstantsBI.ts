import { DescriptionId } from '../core/model/description-id';

const ConstBITypeDate = {
  EMPTY: {
    id: 0,
    description: 'EMPTY',
  },
  FIST_DAY_MONTH: {
    id: 1,
    description: 'FIST_DAY_MONTH',
  },
  LAST_DAY_MONTH: {
    id: 2,
    description: 'LAST_DAY_MONTH',
  },
};

const ConstBIPrimitiveOrEntity = {
  PRIMITIVE: {
    id: 1,
    description: 'PRIMITIVE',
  },
  ENTITY: {
    id: 2,
    description: 'ENTITY',
  },
};

const ConstBITypePrimitive = {
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
  ConstBITypePrimitive.INTEGER,
  ConstBITypePrimitive.DOUBLE,
  ConstBITypePrimitive.LOCAL_DATE,
  ConstBITypePrimitive.STRING,
];

export {
  ConstBITypeDate,
  ConstBITypePrimitive,
  ConstBITypeInputList,
  ConstBIPrimitiveOrEntity,
};
