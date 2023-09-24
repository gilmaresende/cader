import {
  getFirstDayMonth,
  getLastDayMonth,
} from '../core/utils/Date/date-util';

export interface MovimentFilter {
  movimentDateStart?: Date;
  movimentDateEnd?: Date;
  idWallet?: number;
  origin?: number;
  typeRevenueExpence?: number;
}

export function newMovementFilter(): MovimentFilter {
  return {
    movimentDateStart: getFirstDayMonth(),
    movimentDateEnd: getLastDayMonth(),
    typeRevenueExpence: 0,
    origin: 0,
    idWallet: 0,
  };
}
