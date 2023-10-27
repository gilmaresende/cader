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

export const EnumOriginMovement: Array<DescriptionId> = [
  { id: 1, description: 'DESPESA' },
  { id: 2, description: 'TRANSFERENCIA' },
  { id: 3, description: 'RECEITA' },
  { id: 4, description: 'MANUAL' },
];

export const EnumOriginMovementFilter: Array<DescriptionId> = [
  { id: 0, description: 'TODOS' },
  ...EnumOriginMovement,
];

export const EnumExpenseOrigin: Array<DescriptionId> = [
  { id: 1, description: 'LOTE_DESPESA' },
  { id: 2, description: 'FATURA_CARTAO' },
  { id: 3, description: 'MANUAL' },
];

export const EnumExpenseOriginFilter: Array<DescriptionId> = [
  { id: 0, description: 'TODOS' },
  ...EnumExpenseOrigin,
];

export const EnumExpenseStatus: Array<DescriptionId> = [
  { id: 1, description: 'LIQUIDADO' },
  { id: 2, description: 'ABERTO' },
  { id: 3, description: 'PARCIAL' },
];

export const EnumExpenseStatusFilter: Array<DescriptionId> = [
  { id: 0, description: 'TODOS' },
  { id: 99, description: 'ABERTO/PARCIAL' },
  ...EnumExpenseStatus,
];

export const EnumCashInflowStatus: Array<DescriptionId> = [
  { id: 1, description: 'ABERTO' },
  { id: 2, description: 'LIQUIDADO' },
  { id: 3, description: 'PARCIAL' },
];

export const EnumCashInflowStatusFilter: Array<DescriptionId> = [
  { id: 0, description: 'TODOS' },
  { id: 99, description: 'ABERTO/PARCIAL' },
  ...EnumCashInflowStatus,
];

export const EnumCashInflowOrigin: Array<DescriptionId> = [
  { id: 1, description: 'LOTE RECEITA' },
  { id: 2, description: 'COMPRA CARTAO TERCEIROS' },
  { id: 3, description: 'MANUAL' },
];

export const EnumCashInflowOriginFilter: Array<DescriptionId> = [
  { id: 0, description: 'TODOS' },
  ...EnumExpenseOrigin,
];
