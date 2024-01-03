import { DescriptionId } from '../core/model/description-id';
import {
  getFirstDayMonth,
  getLastDayMonth,
} from '../core/utils/Date/date-util';

export interface ExpenseFilter {
  dueDateStart?: any;
  dueDateEnd?: any;
  status?: DescriptionId;
  wallet?: DescriptionId;
  paymentType?: DescriptionId;
  person?: DescriptionId;
  expenseCategory?: DescriptionId;
}

export function newExpsenseFilter(): ExpenseFilter {
  return {
    dueDateStart: getFirstDayMonth(),
    dueDateEnd: getLastDayMonth(),
  };
}
