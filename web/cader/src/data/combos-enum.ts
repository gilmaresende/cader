import { DescriptionId } from 'src/app/core/model/description-id';

export const EnumTypeRevenueExpence: Array<DescriptionId> = [
  {
    id: 1,
    description: 'DESPESA',
  },
  {
    id: 2,
    description: 'RECEITA',
  },
];

export const EnumTypeRevenueExpenceFilter: Array<DescriptionId> = [
  {
    id: 0,
    description: 'TODOS',
  },
  ...EnumTypeRevenueExpence,
];
