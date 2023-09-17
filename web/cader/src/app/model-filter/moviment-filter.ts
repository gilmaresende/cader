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

export function newMovement(): MovimentFilter {
  return {
    movimentDateStart: getFirstDayMonth(),
    movimentDateEnd: getLastDayMonth(),
  };
}