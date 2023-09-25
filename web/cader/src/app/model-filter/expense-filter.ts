import {
  getFirstDayMonth,
  getLastDayMonth,
} from '../core/utils/Date/date-util';

export interface ExpenseFilter {
  dueDateStart?: Date;
  dueDateEnd?: Date;
  status?: number;
  idWallet?: number;
  idPaymentType?: number;
  idPerson?: number;
  idExpenseCategory?: number;
}

export function newExpsenseFilter(): ExpenseFilter {
  return {
    dueDateStart: getFirstDayMonth(),
    dueDateEnd: getLastDayMonth(),
  };
}
