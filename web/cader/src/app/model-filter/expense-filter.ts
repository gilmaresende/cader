import {
  getFirstDayMonth,
  getLastDayMonth,
} from '../core/utils/Date/date-util';

export interface ExpenseFilter {
  movimentDateStart?: Date;
  movimentDateEnd?: Date;
  status?: number;
  idWallet?: number;
  idPaymentType?: number;
  idPerson?: number;
  idExpenseCategory?: number;
}

export function newExpsenseFilter(): ExpenseFilter {
  return {
    movimentDateStart: getFirstDayMonth(),
    movimentDateEnd: getLastDayMonth(),
  };
}
