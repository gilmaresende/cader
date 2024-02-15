import { DescriptionId } from 'src/app/core/model/description-id';
import {
  getFirstDayMonth,
  getLastDayMonth,
} from 'src/app/core/utils/Date/date-util';

export interface LoteOfExpenseFilter {
  dueDateStart?: Date;
  dueDateEnd?: Date;
  wallet?: DescriptionId;
  paymentType?: DescriptionId;
  person?: DescriptionId;
  expenseCategory?: DescriptionId;
}

export function newLoteOfExpsenseFilter(): LoteOfExpenseFilter {
  return {
    dueDateStart: getFirstDayMonth(),
    dueDateEnd: getLastDayMonth(),
  };
}
